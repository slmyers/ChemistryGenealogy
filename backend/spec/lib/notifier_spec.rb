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

  it "can find all unapproved people" do
    
  end

end
