# @author Steven Myers
# the notifier is tested against data in /lib/tasks/test_data.rake 
describe Notifier do
  it "is instantiable" do
    @notifier = Notifier.new()
    expect(@notifier).not_to eql(nil)
  end

  it "can find all unapproved admins" do
    @admins = Notifier.admin_notifications
    expect(@admins).not_to eql(nil)
    expect(@admins.length).to eql(2)
    expect(@admins.first["user"]["id"]).to eql(1)
    expect(@admins.first["id"]).to eql(1)
    expect(@admins[1]["user"]["id"]).to eql(3)
    expect(@admins[1]["id"]).to eql(2)
  end

  it "can find all unapproved users" do
    @users = Notifier.user_notifications
    expect(@users).not_to eql(nil)
    expect(@users.length).to eql(2)
    expect(@users.first["id"]).to eql(2)
    expect(@users[1]["id"]).to eql(3)
  end

  it "can find all unapproved supervisions for a users that are approved" do
    @supervision = Notifier.supervision_notifications
    expect(@supervision).not_to eql(nil)
    expect(@supervision.length).to eql(1)
  end

  it "can find all unapproved mentorships for users that are approved" do
    @mentorship = Notifier.mentorship_notifications
    expect(@mentorship).not_to eql(nil)
    expect(@mentorship.length).to eql(1)
  end


  it "can find unapproved people" do
    @people = Notifier.person_notifications
    expect(@people).not_to eql(nil)
    expect(@people.length).to eql(1)
  end

  it "can bundle all notifications" do
    @notifications = Notifier.all_notifications
    expect(@notifications).not_to eql(nil)
    expect(@notifications.length).to eql(5)
    expect(@notifications["user_notifications"]).not_to eql(nil)
    expect(@notifications["admin_notifications"]).not_to eql(nil)
    expect(@notifications["mentorship_notifications"]).not_to eql(nil)
    expect(@notifications["supervision_notifications"]).not_to eql(nil)
    expect(@notifications["person_notifications"]).not_to eql(nil)
  end
end
