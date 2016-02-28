# i'm just going to run sequential active record find_by queries
# this is a naive approach?

# in the end I think it's more of an sqlite issue, ie, we should probably be
# using elasticsearch or some other type of full text search engine
class Search

  def Search.relations_by_name(name)
    if Person.exists?(name: name)
      @person_id = Person.find_by(name: name).id
      return self.relations_by_id(@person_id)
    end
    return {}
  end

  # TODO: optimize this... far too sequential
  # returns a hash that contains the relations to a person
  # and the person/institution records
  def Search.relations_by_id(person_id)
    @relations = Array.new
    #sequentially search the db... bleh
    @mentors = Mentor.where(person_id: person_id, approved: true)
    @mentored = Mentor.where(mentor_id: person_id, approved: true)
    @supervisors = Supervisor.where(person_id: person_id, approved: true)
    @supervised = Supervisor.where(supervisor_id: person_id, approved: true)

    @relations.push(@mentors)
    @relations.push(@mentored)
    @relations.push(@supervisors)
    @relations.push(@supervised)
    # filter out blank relations
    @relations = @relations.select {|r| !r.blank?}
    # get the people in these relations
    @people = self.get_people(@relations)
    # get the institutions associated with these people
    @institutions = self.get_institutions(@people)


    return {
             'mentors' => @mentors, 'mentored' => @mentored,
             'supervisors' => @supervisors, 'supervised' => @supervised,
             'people' => @people, 'institutions' => @institutions
           }

  end

  # gets the people records associated with each relation
  def Search.get_people(relations_array)
    @ids_array = Array.new
    # O(n^2) ??
    relations_array.each do |rel|
      rel.each do |r|
        @ids_array.push(r.person_id)
        if r.instance_of?(Mentor)
          @ids_array.push(r.mentor_id)
        elsif r.instance_of?(Supervisor)
          @ids_array.push(r.supervisor_id)
        end
      end
    end
    return Person.where(:id => @ids_array)
  end

  # returns the institutions associated with a set of people
  def Search.get_institutions(people_array)
    @institution_array = Array.new
    people_array.each do |rel|
      @institution_array.push(rel.institution_id)
    end
    return Institution.where(:id => @institution_array)
  end
end
