class Deleter

  def self.delete_user(user_id)
    @user = User.find_by_id(user_id)
    if @user.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

  def self.delete_admin(admin_id)
    @admin = Admin.includes(:user)
             .where(:id => admin_id).first
    if @admin.user.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

  def self.delete_mentorship(mentorship_id)
    @mentorship = Mentorship.includes(:institution)
                  .where(:id => mentorship_id).first

    if @mentorship.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

  def self.delete_supervision(supervision_id)
    @supervision = Supervision.includes(degree: :institution)
                    .where(:id => supervision_id).first

    if @supervision.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

  def self.delete_person(person_id)
    @person = Person.find_by_id(person_id)

    if @person.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

end
