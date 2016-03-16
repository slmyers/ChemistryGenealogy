require 'set'
class Search

  def self.relations_by_name(name)
    if Person.exists?(name: name)
      @person_id = Person.find_by(name: name).id
      return self.relations_by_id(@person_id)
    end
    return {}
  end

  # returns a hash that contains the relations to a person
  # and the person/institution records
  def self.relations_by_id(person_id)
    if !person_id.is_a? Integer
      return {}
    end

    @persons = Set.new
    @institutions = Set.new

    #this code could be cleaner still reference notifier.rb
    @search_target = Person.where('id' => person_id)
                     .where('approved' => true)
                     .includes(:institution).first
    if @search_target.blank?
      return  {
                'target' => Array.new,
                'mentors' => Array.new, 'mentored' => Array.new,
                'supervisors' => Array.new, 'supervised' => Array.new,
                'institutions' => Array.new
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

    @persons.each do |p|
      p.each do |person|
        unless person.institution.blank? then @institutions.add(person.institution) end
      end
    end


    return  {
              'target' => @search_target,
              'mentors' => @mentors, 'mentored' => @mentored,
              'supervisors' => @supervisors, 'supervised' => @supervised,
              'institutions' => @institutions
            }
  end

  def self.person(id)
    unless Person.exists?(id)
      return nil
    end

    @person = Person.includes(:institution)
              .includes( {mentorships: [:institution, {mentor: [:institution]}] })
              .includes( {supervisions: [ {degree:  [:institution] }, {supervisor: [:institution]}] })
              .where(:id => id).first

    @mentored = Mentorship.where(:mentor_id => id)
                .includes(:institution)
                .includes(person: :institution)

    @supervised = Supervision.where(:supervisor_id => id)
                  .includes(degree: :institution)
                  .includes(person: :institution)

    @mentorships_array = Array.new
    @person.mentorships.each do |m|
      @mentorship = {
        'id' => m.id,
        'start' => m.start,
        'end' => m.end,
        'institution' => {
          'id' => m.institution.id,
          'name' => m.institution.name
        },
        'mentor' => {
          'id' => m.mentor.id,
          'name' => m.mentor.name,
          'position' => m.mentor.position,
          'institution' => m.mentor.institution
        }
      }
      @mentorships_array.push(@mentorship)
    end

    @supervision_array = Array.new
    @person.supervisions.each do |s|
      @supervision = {
        'id' => s.id,
        'degree' => {
          'id' => s.degree.id,
          'type' => s.degree.degree_type,
          'institution' => {
            'id' => s.degree.institution.id,
            'name' => s.degree.institution.name
          }
        },
        'supervisor' => {
          'id' => s.supervisor.id,
          'name' => s.supervisor.name,
          'position' => s.supervisor.position,
          'institution' => {
            'id' => s.supervisor.institution.id,
            'name' => s.supervisor.institution.name
          }
        }
      }
      @supervision_array.push(@supervision)
    end

    @mentored_array = Array.new
    @mentored.each do |m|
      @mentored_obj = {
        'id' => m.id,
        'start' => m.start,
        'end' => m.end,
        'institution' => {
          'id' => m.institution.id,
          'name' => m.institution.name
        },
        'person' => {
          'id' => m.person.id,
          'name' => m.person.name,
          'position' => m.person.position,
          'institution' => {
            'id' => m.person.institution.id,
            'name' => m.person.institution.name
          }
        }
      }
      @mentored_array.push(@mentored_obj)
    end

    @supervised_array = Array.new
    @supervised.each do |s|
      @supervised_obj = {
        'id' => s.id,
        'degree' => {
          'id' => s.degree.id,
          'type' => s.degree.degree_type,
          'institution' => {
            'id' => s.degree.institution.id,
            'name' => s.degree.institution.name
          }
        },
        'person' => {
          'id' => s.person.id,
          'name' => s.person.name,
          'position' => s.person.position,
          'institution' => {
            'id' => s.person.institution.id,
            'name' => s.person.institution.name
          }
        }
      }
      @supervised_array.push(@supervised_obj)
    end

    @data = {
      'person' => {
        'name' => @person.name,
        'position' => @person.position,
        'id' => @person.id,
        'institution' => {
          'id' => @person.institution.id,
          'name' => @person.institution.name
        }
      },
      'mentors' => @mentorships_array,
      'mentored' => @mentored_array,
      'supervisors' => @supervision_array,
      'supervised' => @supervised_array
    }
    return @data.as_json
  end
end
