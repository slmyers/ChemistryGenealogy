# @author Steven Myers
# This class is used to find unapproved information in the database and bundle
# it in a manner that the frontend can parse effectively.
class Notifier

  # helper class to gather all notifications
  def self.all_notifications
    return {
      'user_notifications' => self.user_notifications,
      'admin_notifications' => self.admin_notifications,
      'mentorship_notifications' => self.mentorship_notifications,
      'supervision_notifications' => self.supervision_notifications,
      'person_notifications' => self.person_notifications
    }
  end

  # finds all unapproved users
  def self.user_notifications
    @unapproved_users = User.where({:approved => false})

    @res_array = Array.new
    @unapproved_users.each do |u|
      @res_array.push(u)
    end
    return @res_array
  end

  # finds all unapproved admins, pushes admin + user info
  def self.admin_notifications
    @unapproved_admins = Admin.where({:approved => false})
                         .includes(:user)
    @res_array = Array.new

    @unapproved_admins.each do |a|
      if a.approved == false
        @admin = {
          'id' => a.id,
          'user' => a.user
        }
        @res_array.push(@admin)
      end
    end
    return @res_array
  end

  # return supervision_notifications for approved people
  # this reflects a relationship between existing people
  def self.supervision_notifications
    @unapproved_supervisions = Supervision.where({:approved => false})
                               .includes(degree: :institution)
                               .includes(person: :institution)
                               .includes(supervisor: :institution)

    @res_array = Array.new
    @unapproved_supervisions.each do |s|
      if s.person.approved and s.supervisor.approved
        @supervision = {
          'supervision' => {
            'data' => s,
            'degree' => s.degree,
            'institution' => s.degree.institution
          },
          'supervised' => {
            'person' => s.person,
            'institution' => s.person.institution
          },
          'supervisor' => {
            'person' => s.supervisor,
            'institution' => s.supervisor.institution
          }
        }
        @res_array.push(@supervision)
      end
    end
    return @res_array
  end

  # finds all unapproved mentorships between approved people
  # reflects mentorships between existing people
  def self.mentorship_notifications
    @unapproved_mentorships = Mentorship.where({:approved => false})
                              .includes(:institution)
                              .includes(person: :institution)
                              .includes(mentor: :institution)
    @res_array = Array.new
    @unapproved_mentorships.each do |m|
      if m.person.approved and m.mentor.approved
        @mentorship = {
          'mentorship' => {
            'data' => m,
            'institution' => m.institution
          },
          'mentored' => {
            'person' => m.person,
            'institution' => m.person.institution
          },
          'mentor' => {
            'person' => m.mentor,
            'institution' => m.mentor.institution
          }
        }
        @res_array.push(@mentorship)
      end
    end
    return @res_array
  end

  #this method will bundle all relationships + information w.r.t. an unapproved
  #person. This reflects a person that was just added to the database.
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

    @res_array = Array.new
    @unapproved_people.each do |p|
      @target = {'person' => p, 'person_institution' => p.institution}


      # got the supervisor, supervision, degree + institutions
      @supervisors = self.supervisors(p.supervisions)

      # got the mentors, mentorships + institutions
      @mentors = self.mentors(p.mentorships)

      # get the person's supervisions, supervised, degrees + instituitons
      # suffix raw implies that the data still needs to be processed into a more
      # friendly form.
      @supervised_raw = @unapproved_supervisions.where(:supervisor_id => p.id)
                        .includes(degree: :institution)
                        .includes(person: :institution)
      @supervised = self.supervised(@supervised_raw)

      @mentored_raw = @unapproved_mentorships.where(:mentor_id => p.id)
                      .includes(:institution)
                      .includes(person: :institution)
      @mentored = self.mentored(@mentored_raw)

      @aggregated_person =
        {
          'target' => @target,
          'mentors' => @mentors,
          'mentored' => @mentored,
          'supervised' => @supervised,
          'supervisors' => @supervisors
        }
      @res_array.push(@aggregated_person)
    end
    return @res_array
  end


  # helper method for building the person notification where they
  # were supervised
  def self.supervisors(unapproved_supervisions)
    @supervisions = Array.new

    unapproved_supervisions.each do |s|
      @supervision_obj = {
        'supervision' => s,
        'degree' => {
          'degree' => s.degree,
          'institution' => s.degree.institution
        },
        'supervisor' => {
          'person' => s.supervisor,
          'institution' => s.supervisor.institution
        }
      }
      @supervisions.push(@supervision_obj)
    end
    return @supervisions
  end

  # helper method used to gather the persons mentors
  def self.mentors(unapproved_mentorships)
    @mentorships = Array.new
    unapproved_mentorships.each do |m|
      @mentorships_obj = {
        'mentorship' => m,
        'instituiton' => m.institution,
        'mentor' => {
          'person' => m.mentor,
          'institution' => m.mentor.institution
        }
      }
      @mentorships.push(@mentorships_obj)
    end
    return @mentorships
  end

  # helper method used to build the mentorships where the person was the
  # mentor
  def self.mentored(unapproved_mentorships)
    @mentorships = Array.new
    unapproved_mentorships.each do |m|
      @mentorships_obj = {
        'mentorship' => m,
        'instituiton' => m.institution,
        'mentored' => {
          'person' => m.person,
          'institution' => m.person.institution
        }
      }
      @mentorships.push(@mentorships_obj)
    end
    return @mentorships
  end

  # helper method used to build supervisions for unapproved person
  # where the person was the supervisor
  def self.supervised(unapproved_supervisions)
    @supervisions = Array.new

    unapproved_supervisions.each do |s|
      @supervision_obj = {
        'supervision' => s,
        'degree' => {
          'degree' => s.degree,
          'institution' => s.degree.institution
        },
        'supervised' => {
          'person' => s.person,
          'institution' => s.person.institution
        }
      }
      @supervisions.push(@supervision_obj)
    end
    return @supervisions
  end

end
