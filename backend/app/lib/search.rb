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
    @institutions = Set.new

    @search_target = Person.where('id' => person_id)
                     .where('approved' => true)
                     .includes(:institution).first
    if @search_target.blank?
      return  {
                'target' => Array.new,
                'mentors' => Array.new, 'mentored' => Array.new,
                'supervisors' => Array.new, 'supervised' => Array.new,
                'institutions' => Array.new, 'people' => Array.new
              }
    end

    @mentors = Person.joins('LEFT OUTER JOIN mentorships ON mentorships.mentor_id = people.id')
               .where('mentorships.person_id' => person_id).where('approved' => true)
               .includes(:institution)

    unless @mentors.blank? then @persons.add(@mentors) end

    @mentored = Person.joins(:mentorships)
                .where('mentorships.mentor_id' => person_id).where('approved' => true)
                .includes(:institution)
    unless @mentored.blank? then @persons.add(@mentored) end

    @supervisors = Person.joins('LEFT OUTER JOIN supervisions ON supervisions.supervisor_id = people.id')
                   .where('supervisions.person_id' => person_id).where('approved' => true)
                   .includes(:institution)
    unless @supervisors.blank? then @persons.add(@supervisors) end

    @supervised = Person.joins(:supervisions)
                  .where('supervisions.supervisor_id' => person_id).where('approved' => true)
                  .includes(:institution)
    unless @supervised.blank? then @persons.add(@supervised) end

    # there is a possible optimization to make, but doing so makes the returned values unwieldy
    # check here for more info
    # https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/interesting-trace-from-search

    @persons.each do |p|
      p.each do |person|
        @institutions.add(person.institution)
      end
    end


    return  {
              'target' => @search_target,
              'mentors' => @mentors, 'mentored' => @mentored,
              'supervisors' => @supervisors, 'supervised' => @supervised,
              'institutions' => @institutions
            }
  end


end
