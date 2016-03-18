# @author Steven Myers
# This class is used for rejecting user information (unapproved) entries that
# the administrator has decided against accepting. The method names, arguements
# and returns are self explanatory.
# TODO: investigate whether or not information is left "dangling" and destroy
# unrefrenced and unapproved table rows, ie, an unapproved mentorship occured at
# an unapproved institution. After the unapproved mentorship is deleted, the
# unapproved institution should also be removed.
class Deleter

  def self.delete_user(user_id)
    @user = User.find_by_id(user_id)
    if @user.destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

  def self.delete_admin(admin_id)
    @admin = Admin.find_by_id(admin_id)
    if @admin.destroy
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

  # TODO: I'm sure this is leaving "ghost rows" as described at the
  # begining of this class
  def self.delete_person(person_id)
    @person = Search.person_info(person_id)

    @person["person"].mentorships.each do |m|
      m.destroy
    end

    @person["person"].supervisions.each do |s|
      s.destroy
    end

    @person["mentored"].each do |m|
      m.destroy
    end

    @person["supervised"].each do |s|
      s.destroy
    end

    if @person["person"].destroy
      return {"success" => true}
    end
    return {"error" => 'unable to delete'}
  end

end
