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

    # make a view instead ?
    @mentors = Person.joins('LEFT OUTER JOIN mentors ON mentors.mentor_id = people.id')
               .where('mentors.person_id' => person_id)

    @mentored = Person.joins(:mentors)
                .where('mentors.mentor_id' => person_id)

    @supervisors = Person.joins('LEFT OUTER JOIN supervisors ON supervisors.supervisor_id = people.id')
                   .where('supervisors.person_id' => person_id)

    @supervised = Person.joins(:supervisors)
                  .where('supervisors.supervisor_id' => person_id)

    @people = {
                'mentors' => @mentors, 'mentored' => @mentored,
                'supervisors' => @supervisors, 'supervised' => @supervised
              }

    #TODO: get a list of institutions

    @institutions = self.get_institutions(@people)




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
