# @author Ji Hwan Kim 
# spec test for information in general
describe Person, '.new_person' do
  before do
    @person = Person
  end

  it 'creates a new person to db' do
    # this test will fail since the new name doesn't exist in db yet
    # the name "Ji Hwan Kim" is not on the db yet

    # actually this test will pass, because because an ActiveRecord will never
    # be equal to a number. http://guides.rubyonrails.org/active_record_querying.html
    expect(@person.find_by_name("Ji Hwan Kim")).to eql(nil)
    @person.new_person("Ji Hwan Kim", "Doctorate", "University of Alberta")
    # check if the person got created in db
    expect(@person.where(name: "Ji Hwan Kim")).not_to eql(nil)
  end
end

describe Institution, '.new_institution' do
  before do
    @institution = Institution
  end

  it 'creates a new institution to db' do
    # this test will pass since the new name doesn't exist in db yet
    expect(@institution.find_by_name("University A")).to eql(nil)
    @institution.new_institution("University A")
    # check if the person got created in db
    expect(@institution.where(name: "University A")).not_to eql(nil)
  end
end

describe Mentorship, '.new_mentorship' do
  before do
    @person = Person
    @mentorship = Mentorship
    @mentorshipLast = Mentorship.last
  end

  it 'creates a new mentorship to db' do
    # this test will pass since there is no person with name Mentee A
    expect(@person.find_by_name("Mentee A")).to eql(nil)
    @mId = (@mentorshipLast.id) + 1
    expect(@mentorship.find_by_id(@mId)).to eql(nil)
    @mentorship.new_mentorship("Mentee A", "Mentor A", "University of Alberta", "2014", "2016")
    # check if the person and mentorship got created in db
    expect(@person.where(name: "Mentee A")).not_to eql(nil)
    expect(@mentorship.where(id: @mId)).not_to eql(nil)
  end
end

describe Supervision, '.new_supervision' do
  before do
    @person = Person
    @supervision = Supervision
    @supervisionLast = Supervision.last
  end

  it 'creates a new supervision to db' do
    # this test should pass as there is no person named Doctor A
    expect(@person.find_by_name("Doctor A")).to eql(nil)
    @sId = (@supervisionLast.id) + 1
    expect(@supervision.find_by_id(@sId)).to eql(nil)
    @supervision.new_supervision("2016", "Doctorate", "University of Alberta", "Doctor A", "Supervisor A")
    # check if the supervision got created in db
    expect(@supervision.where(id: @sId)).not_to eql(nil)
    # check if the person got created in db
    expect(@person.where(name: "Doctor A")).not_to eql(nil)
  end
end

describe Degree, '.new_degree' do
  before do
    @degree = Degree
    @degreeLast = Degree.last
  end

  it 'creates a new degree to db' do
    # this test should fail as there are only 4 degrees in db
    @dId = (@degreeLast.id) + 1
    expect(@degree.find_by_id(@dId)).to eql(nil)
    @degree.new_degree("2016", "Doctorate", "University of Alberta")
    # check if the supervision got created in db
    expect(@degree.where(id: @dId)).not_to eql(nil)
  end
end