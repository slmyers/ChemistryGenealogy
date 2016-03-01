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

    @search_target = Person.where('id' => person_id)
                     .where('approved' => true)
    if @search_target.blank?
      return  {
                'target' => Array.new,
                'mentors' => Array.new, 'mentored' => Array.new,
                'supervisors' => Array.new, 'supervised' => Array.new,
                'institutions' => Array.new, 'people' => Array.new
              }
    end

    unless @search_target.blank? then @persons.add(@search_target) end

    @mentors = Person.joins('LEFT OUTER JOIN mentorships ON mentorships.mentor_id = people.id')
               .where('mentorships.person_id' => person_id).where('approved' => true)

    unless @mentors.blank? then @persons.add(@mentors) end

    @mentored = Person.joins(:mentorships)
                .where('mentorships.mentor_id' => person_id).where('approved' => true)
    unless @mentored.blank? then @persons.add(@mentored) end

    @supervisors = Person.joins('LEFT OUTER JOIN supervisions ON supervisions.supervisor_id = people.id')
                   .where('supervisions.person_id' => person_id).where('approved' => true)
    unless @supervisors.blank? then @persons.add(@supervisors) end

    @supervised = Person.joins(:supervisions)
                  .where('supervisions.supervisor_id' => person_id).where('approved' => true)
    unless @supervised.blank? then @persons.add(@supervised) end

    # there is a possible optimization to make, but doing so makes the returned values unwieldy
    # check here for more info
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
              'target' => @search_target,
              'mentors' => @mentors, 'mentored' => @mentored,
              'supervisors' => @supervisors, 'supervised' => @supervised,
              'institutions' => @institutions, 'people' => @persons.to_a.flatten
            }
  end
end
