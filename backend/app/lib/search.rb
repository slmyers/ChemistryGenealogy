require 'set'
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

    @persons = Set.new
    @concrete_institutions = Set.new

    @mentors = Person.select('people.name, people.id, people.institution_id')
               .joins('LEFT OUTER JOIN mentorships ON mentorships.mentor_id = people.id')
               .where('mentorships.person_id' => person_id).where('approved' => true)

    @persons.add(@mentors)

    @mentored = Person.select('people.name, people.id, people.institution_id')
                .joins(:mentorships)
                .where('mentorships.mentor_id' => person_id).where('approved' => true)
    @persons.add(@mentored)

    @supervisors = Person.select('people.name, people.id, people.institution_id')
                   .joins('LEFT OUTER JOIN supervisions ON supervisions.supervisor_id = people.id')
                   .where('supervisions.person_id' => person_id).where('approved' => true)
    @persons.add(@supervisors)

    @supervised = Person.select('people.name, people.id, people.institution_id')
                  .joins(:supervisions)
                  .where('supervisions.supervisor_id' => person_id).where('approved' => true)
    @persons.add(@supervised)

    # this code is not executed synchronously!
    # see here for interesting trace:
    # https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/interesting-trace-from-search
    @persons.each do |p|
      p.each do |person|
        unless person.institution_id == nil
          @concrete_institutions.add(person.institution_id)
        end
      end
    end

    @institutions = Institution.select('id, name').where(:id => @concrete_institutions.to_a)


    return  {
              'mentors' => @mentors, 'mentored' => @mentored,
              'supervisors' => @supervisors, 'supervised' => @supervised,
              'institutions' => @institutions, 'people' => @persons
            }
  end
end
