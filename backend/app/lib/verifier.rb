# @author Steven Myers
# this class is used to verify unapproved information, basically all the
# methods just turn approved = true for respective entries
class Verifier

  # verifies a user by their id
  def self.verify_user(user_id)
    @user = User.find_by_id(user_id)

    @user.approved = true
    if @user.save
      return {'user' => @user}
    else
      return nil
    end
  end

  # verifies an admin by their id
  def self.verify_admin(admin_id)
    @admin = Admin.find_by_id(admin_id)
    @admin.approved = true
    @user = User.find_by_id(@admin.user_id)
    @user.approved = true
    if @admin.save && @user.save
      return {'admin' => @admin}
    else
      return nil
    end
  end

  def self.verify_mentorship(mentorship_id)
    @mentorship = Mentorship.includes(:institution)
                  .where(:id => mentorship_id).first

    if @mentorship.institution != nil
      if @mentorship.institution.approved == false
        @mentorship.institution.approved = true
        @mentorship.institution.save
      end
    end

    @mentorship.approved = true
    @mentorship.save
    return {
      'mentorship' => @mentorship,
      'institution' => @mentorship.institution
    }
  end

  def self.verify_supervision(supervision_id)
    @supervision = Supervision.includes(degree: :institution)
                    .where(:id => supervision_id).first

    if @supervision.degree != nil
      if @supervision.degree.approved == false
        @supervision.degree.approved = true
        @supervision.degree.save
      end
      if @supervision.degree.institution != nil
        if @supervision.degree.institution.approved == false
          @supervision.degree.institution.approved = true
          @supervision.degree.institution.save
        end
      end
    end

    @supervision.approved = true
    @supervision.save
    return {
      'supervision' => @supervision,
      'degree' => {
        'data' => @supervision.degree,
        'institution' => @supervision.degree.institution
      }
    }
  end

  # goes through every single thing related to a person and approves it
  # if a user approves a person, they also approve everything related to that
  # person. So, if you see something funny on an unapproved person's details,
  # then you shouldn't improve.
  # TODO: this method is very slow. Investigate optimizations.
  def self.verify_person(person_id)
    # false because we're using the search function to find unapproved person
    # information. False is handed to the :approved key in the where clause
    # for Search.person_info(id, approved)
    @person = Search.person_info(person_id)

    if @person["person"].approved == false
      @person["person"].approved = true
      #search/autocomplete is performed assuming all lower cases in name
      @person["person"].name = @person["person"].name.downcase
      @person["person"].save
    end

    if @person["person"].institution != nil
      if @person["person"].institution.approved == false
        @person["person"].institution.approved = true
        @person["person"].institution.save
      end
    end

    @person["person"].mentorships.each do |m|
      m.approved = true
      if m.institution != nil
        m.institution.approved = true
        m.institution.save
      end
      if m.mentor != nil
        m.mentor.approved = true
        m.mentor.save
        if m.mentor.institution != nil
          m.mentor.institution.approved = true
          m.mentor.institution.save
        end
      end
      m.save
    end

    @person["person"].supervisions.each do |s|
      s.approved = true
      if s.degree != nil
        s.degree.approved = true
        s.degree.save
        if s.degree.institution != nil
          s.degree.institution.approved = true
          s.degree.institution.save
        end
      end

      if s.supervisor != nil
        s.supervisor.approved = true
        s.supervisor.save
        if s.supervisor.institution != nil
          s.supervisor.institution.approved = true
          s.supervisor.institution.save
        end
      end
      s.save
    end

    @person["mentored"].each do |m|
      m.approved = true
      if m.institution != nil
        m.institution.approved = true
        m.institution.save
      end
      if m.person != nil
        m.person.approved = true
        m.person.save
        if m.person.institution != nil
          m.person.institution.approved = true
          m.person.institution.save
        end
      end
      m.save
    end

    @person["supervised"].each do |s|
      s.approved = true
      if s.degree != nil
        s.degree.approved = true
        if s.degree.institution != nil
          s.degree.institution.approved = true
          s.degree.institution.save
        end
        s.degree.save
      end

      if s.person != nil
        s.person.approved = true
        if s.person.institution != nil
          s.person.institution.approved = true
          s.person.institution.save
        end
        s.person.save
      end
      s.save
    end

    return {
      'warning' => "person approved, but with no error checking"
    }
  end
end
