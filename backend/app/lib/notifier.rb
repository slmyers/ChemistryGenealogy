require 'set'
class Notifier

  # TODO: I feel like this function should use Search.relations_by_id
  # investigate when refactoring.
  def self.person_notifications
    # person, their mentors and their supervisors
    @unapproved_people = Person.where({:approved => false})
                         .includes(:institution)
                         .includes(mentorships: [:institution, {mentor: [:institution]}])
                         .includes( {supervisions: [ {degree:  [:institution] }, {supervisor: [:institution]}] })

    # supervisions person was involved in, ie, they were the supervisor
    @unapproved_supervisions = Supervision.where({:approved => false, :supervisor_id => @unapproved_people.ids})
                              .includes(degree: :institution)
                              .includes(person: :institution)
    # mentorships person was involved in, ie, they were the mentor
    @unapproved_mentorships = Mentorship.where({:approved => false, :mentor_id => @unapproved_people.ids})
                              .includes(:institution)
                              .includes(person: :institution)

    # this is becoming a monster method, but if I pass a ActiveRelation then, it's includes
    # not carried over, so I'm just going to run them in this method.
    @res_array = Array.new
    @unapproved_people.each do |p|
      @excluded_mentorship_ids = Array.new
      @excluded_supervision_ids = Array.new

      @supervisors = Array.new
      @mentors = Array.new
      @supervisions = Array.new
      @mentorships = Array.new
      @institutions = Set.new
      @degrees = Array.new

      # got the person + institution
      @person = p
      @person_institution = p.institution
      @institutions.add(p.institution)

      # got the supervisor, supervision, degree + institutions
      p.supervisions.each do |s|
        @supervisors.push(s.supervisor)
        @supervisions.push(s)
        @degrees.push(s.degree)
        @institutions.add(s.supervisor.institution)
        @institutions.add(s.degree.institution)
        @excluded_supervision_ids.push(s.id)
      end

      # got the mentors, mentorships + institutions
      p.mentorships.each do |m|
        @mentors.push(m.mentor)
        @mentorships.push(m)
        @institutions.add(m.mentor.institution)
        @institutions.add(m.institution)
        @excluded_mentorship_ids.push(m.id)
      end

      # got the supervisions + instituitons of p where p is the supervisor
      @bad_name_supervised = @unapproved_supervisions.where(:supervisor_id => p.id)
                            .includes(degree: :institution)
                            .includes(person: :institution)
      @supervised = Array.new
      @bad_name_supervised.each do |s|
        @supervisions.push(s)
        @supervised.push(s.person)
        @degrees.push(s.degree)
        @instituitons.add(s.degree.institution)
        @instituitons.add(s.person.institution)
      end

      @bad_name_mentored = @unapproved_mentorships.where(:mentor_id => p.id)
                            .includes(:institution)
                            .includes(person: :institution)
      # got the mentorships + instituitons of p where p is the mentor
      @bad_name_mentored.each do |m|
        @mentorships.push(m)
        @mentored.push(m.person)
        @instituitons.add(m.instituiton)
        @instituitons.add(m.person.instituiton)
      end


      @aggregated_person =
        {
          'target' => @person,
          'mentors' => @mentors,
          'mentorships' => @mentorships,
          'supervisors' => @supervisors,
          'supervisions' => @supervisions,
          'supervised' => @supervised,
          'mentored' => @mentored,
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
