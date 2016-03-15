class Notifier

  def self.user_notifications
    @unapproved_users = User.where({:approved => false})
                        .includes(:admin )

    @res_array = Array.new
    @unapproved_users.each do |u|
      if u.admin.blank?
        @user = {
          'id' => u.id,
          'first_name' => u.first_name,
          'last_name' => u.last_name,
          'email' => u.email
        }
        @res_array.push(@user)
      end
    end
    return @res_array
  end

  def self.admin_notifications
    @unapproved_admins = Admin.where({:approved => false})
                         .includes(:user)

    @res_array = Array.new

    @unapproved_admins.each do |a|
      unless a.user.blank?
        @admin = {
          'id' => a.id,
          'user' => {
            'first_name' => a.user.first_name,
            'last_name' => a.user.last_name,
            'email' => a.user.email
          }
        }
        @res_array.push(@admin)
      end
    end
    return @res_array
  end

  # return supervision_notifications
  def self.supervision_notifications
    @unapproved_supervisions = Supervision.where({:approved => false})
                               .includes(degree: :institution)
                               .includes(person: :institution)
                               .includes(supervisor: :institution)

    @res_array = Array.new
    @unapproved_supervisions.each do |s|
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
    return @res_array
  end

  # finds all unapproved mentorships
  def self.mentorship_notifications
    @unapproved_mentorships = Mentorship.where({:approved => false})
                              .includes(:institution)
                              .includes(person: :institution)
                              .includes(mentor: :institution)
    @res_array = Array.new
    @unapproved_mentorships.each do |m|
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
    return @res_array
  end

  def self.supervision_notifications
    @unapproved_supervisions = Supervision.where({:approved => false})
                               .includes(degree: :institution)
                               .includes(person: :institution)
                               .includes(supervisor: :institution)


  end
  #this method will bundle all unapproved people (new people) together in a
  #hash
  #TODO: investigate refactoring and/or folding into app/lib/search.rb
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
    # not carried over, so I'm just going to run them in this method. That is passing
    # an active relation
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
      @supervised = self.supervisors(@supervised_raw)

      @mentored_raw = @unapproved_mentorships.where(:mentor_id => p.id)
                      .includes(:institution)
                      .includes(person: :institution)
      @mentored = self.mentors(@mentored_raw)

      @aggregated_person =
        {
          'target' => @target,
          'mentors' => @mentors,
          'mentored' => @mentored,
          'supervisors' => @supervisors,
          'supervised' => @supervised
        }
      @res_array.push(@aggregated_person)
    end
    return @res_array
  end

  # find unapproved mentorships except those withc excluded_ids
  # the excluded ids are the mentorships that are associated with
  # unapproved people.
  def self.mentors(unapproved_mentorships)
    @mentorships = Array.new
    unapproved_mentorships.each do |m|
      @mentorships_obj = {
        'mentorship' => m,
        'instituiton' => m.institution,
        'mentor' => {
          'person' => m.person,
          'institution' => m.person.institution
        }
      }
      @mentorships.push(@mentorships_obj)
    end
    return @mentorships
  end


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
          'person' => s.person,
          'institution' => s.person.institution
        }
      }
      @supervisions.push(@supervision_obj)
    end
    return @supervisions
  end

end
