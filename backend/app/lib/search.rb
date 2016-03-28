require 'set'
# @author Steven Myers
# This class is used to find all relations with respect to a person.
# That is to find the: postdocs mentored by the person, the postdoc mentors for
# the person, the degrees supervised by the person and the supervisors for the
# persons degrees. There is also the case where it finds ALL available information
# about a person and also the people related to the person's information.
class Search

  # if called will find the id associated with the name and then call
  # self.relations_by_id
  def self.relations_by_name(name)
    if Person.exists?(name: name)
      @person_id = Person.find_by(name: name).id
      return self.relations_by_id(@person_id)
    end
    return {}
  end

  # returns a hash that contains the relations to a person
  # and the person/institution records.
  # it is used in conjunction with search on the frontend, and it is likely
  # that this class can be optimized
  # TODO: investigate optimizations
  def self.relations_by_id(person_id)
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

  # this function was extracted from self.person(id) and is called by
  # Notifier and Deleter. It is used to retrieve the relationships w.r.t
  # @param id
  # @return hash contating the relationships
  def self.person_info(id)
    unless Person.exists?(id) then return nil end

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

    return {
      'person' => @person,
      'mentored' => @mentored,
      'supervised' => @supervised
    }
  end

  # this class is different from relations_by_id, because it not only gathers
  # the relations, but also the information required to "fill" out these relations.
  # used to detail or "view" a person on the frontend.
  def self.person(id)
    unless Person.exists?(id) then return nil end

    @person_info = self.person_info(id)

    @mentorships_array = Array.new
    unless @person_info["person"].mentorships.blank?
      @person_info["person"].mentorships.each do |m|
        @mentorship = {
          'id' => m.id,
          'start' => m.start,
          'end' => m.end,
          'institution' => m.institution,
          'mentor' => {
            'data' => m.mentor,
            'institution' => m.mentor.institution
          }
        }
        @mentorships_array.push(@mentorship)
      end
    end

    @supervision_array = Array.new
    unless @person_info["person"].supervisions.blank?
       @person_info["person"].supervisions.each do |s|
        @supervision = {
          'id' => s.id,
          'degree' => {
            'data' => s.degree,
            'institution' => s.degree.institution
          },
          'supervisor' => {
            'person' => s.supervisor,
            'institution' => s.supervisor.institution
          }
        }
        @supervision_array.push(@supervision)
      end
    end

    @mentored_array = Array.new
    unless @person_info["mentored"].blank?
      @person_info["mentored"].each do |m|
        @mentored_obj = {
          'id' => m.id,
          'start' => m.start,
          'end' => m.end,
          'institution' => m.institution,
          'mentored' => {
            'person' => m.person,
            'institution' => m.person.institution
            }
          }
        @mentored_array.push(@mentored_obj)
      end
    end

    @supervised_array = Array.new
    unless @person_info["supervised"].blank?
      @person_info["supervised"].each do |s|
        @supervised_obj = {
          'id' => s.id,
          'degree' => {
            'data' => s.degree,
            'institution' => s.degree.institution
          },
          'person' => {
            'data' => s.person,
            'institution' => s.person.institution
          }
        }
        @supervised_array.push(@supervised_obj)
      end
    end

    @data = {
      'person' => {
        'data' => @person_info["person"],
        'institution' => @person_info["person"].institution
      },
      'mentors' => @mentorships_array,
      'mentored' => @mentored_array,
      'supervisors' => @supervision_array,
      'supervised' => @supervised_array
    }
    return @data.as_json
  end
end
