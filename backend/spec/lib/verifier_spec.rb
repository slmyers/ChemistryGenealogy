# @author Steven Myers
# the verifier is tested against data in /lib/tasks/test_data.rake
# these tests are not the strongest
describe Verifier do
  it "is instantiable" do
    @verifier = Verifier.new()
    expect(@verifier).not_to eql(nil)
  end

  it "can verify a user" do
    Verifier.verify_user(2)
    expect(User.find_by_id(2).approved).to eql(true)
  end

  it "can verify an admin" do
    Verifier.verify_admin(2)
    expect(User.find_by_id(3).approved).to eql(true)
    expect(Admin.find_by_id(2).approved).to eql(true)
  end

  it "can verify a mentorship" do
    Verifier.verify_mentorship(9)
    expect(Mentorship.find_by_id(9).approved).to eql(true)
  end

  it "can verify a supervision" do
    Verifier.verify_supervision(11)
    expect(Supervision.find_by_id(11).approved).to eql(true)
  end

  it "can verify a person" do
    Verifier.verify_person(23)
    expect(Person.find_by_id(23).approved).to eql(true)
  end
end
