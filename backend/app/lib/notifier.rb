require 'set'
class Notifier

  # TODO: I feel like this function should use Search.relations_by_id
  # investigate when refactoring.
  def self.person_notifications
    # person, their mentors and their supervisors
    @unapproved_people = Person.where({:approved => false})
                         .includes(:institution)
                         .includes(mentorships: [:institution, :mentor])
                         .includes( {supervisions: [ {degree:  [:institution] }, :supervisor] })

    # supervisions person was involved in
    @unapproved_supervisions = Supervision.where({:approved => false, :supervisor_id => @unapproved_people.ids})
                              .includes(degree: :institution)
    # mentorships person was involved in
    @unapproved_mentorships = Mentorship.where({:approved => false, :mentor_id => @unapproved_people.ids})
                              .includes(:institution)

    @res_array = Array.new
    @unapproved_people.each do |p|
      @excluded_mentorship_ids = Array.new
      @excluded_supervision_ids = Array.new
      @excluded_institution_ids = Array.new

      @supervisors = Array.new
      @mentors = Array.new
      @supervisions = Array.new
      @mentorships = Array.new
      @institutions = Set.new

      @person = p
      @person_institution = p.institution
      @institutions.add(p.institution)

      p.supervisions.each do |s|
        @supervisors.push(s.supervisor)
        @supervisions.push(s)
      end

      p.mentorships.each do |m|
        @mentors.push(m.mentor)
        @mentorships.push(m)
      end


      @degrees = Array.new

      @aggregated_person =
        {
          'target' => @person,
          'mentors' => @mentors,
          'mentorships' => @mentorships,
          'supervisors' => @supervisors,
          'supervisions' => @supervisions,
          'institutions' => @institutions,
        }
      @res_array.push(@aggregated_person)
      puts @aggregated_person.as_json
    end
  end

  # find unapproved mentorships where the person has already been
  # approved.
  def self.add_hanging_mentorships(excluded_ids)

  end


  def self.add_institutions(people)
    @institutions = Set.new
    people.each do |p|
      @institutions.add(p.institution)
    end
    return @institutions
  end


  def self.add_mentors(people)

  end

  def self.add_mentored(people)

  end

  def self.add_mentors(people)

  end

end
