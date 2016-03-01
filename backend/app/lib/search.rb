class Search

  def Search.relations_by_name(name)
    if Person.exists?(name: name)
      @person_id = Person.find_by(name: name).id
      return self.relations_by_id(@person_id)
    end
    return {}
  end

  # returns a hash that contains the relations to a person
  # and the person/institution records
  def Search.relations_by_id(person_id)
    if !person_id.is_a? Integer
      return {}
    end

    @mentors = Person.select('people.name, people.id, people.institution_id')
               .joins('LEFT OUTER JOIN mentorships ON mentorships.mentor_id = people.id')
               .where('mentorships.person_id' => person_id).where('approved' => true)

    @mentored = Person.select('people.name, people.id, people.institution_id')
                .joins(:mentorships)
                .where('mentorships.mentor_id' => person_id).where('approved' => true)

    @supervisors = Person.select('people.name, people.id, people.institution_id')
                   .joins('LEFT OUTER JOIN supervisions ON supervisions.supervisor_id = people.id')
                   .where('supervisions.person_id' => person_id).where('approved' => true)

    @supervised = Person.select('people.name, people.id, people.institution_id')
                  .joins(:supervisions)
                  .where('supervisions.supervisor_id' => person_id).where('approved' => true)

    @people = {
                'mentors' => @mentors, 'mentored' => @mentored,
                'supervisors' => @supervisors, 'supervised' => @supervised
              }

    #TODO: get a list of institutions
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
