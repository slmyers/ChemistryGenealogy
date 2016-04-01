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

describe Person, '.edit_Person_Information' do
  before do
    @personFirst = Person.first
  end

  it 'edits an existing person information' do
    # this test will test for edtiting information
    
    # test for edit name
    # I want to change the name to Ji Hwan Kim, first check if it is not equal to Ji Hwan Kim
    # first check if the parameter is not nil
    expect(@personFirst.name).to_not eql(nil)

    expect(@personFirst.name).to_not eql("Ji Hwan Kim")
    @personFirst.update(name: "Ji Hwan Kim")
    expect(@personFirst.name).to eql("Ji Hwan Kim")

    # test for edit position
    # check if param is not nil
    expect(@personFirst.position).not_to eql(nil)

    expect(@personFirst.position).to_not eql("Postition A")
    @personFirst.update(position: "Position A")
    expect(@personFirst.position).to eql("Position A")
  end
end

describe Degree, '.edit_Degree_Information' do
  before do
    @degreeFirst = Degree.first
  end

  it 'edits an existing degree information' do
    # this test will test for edtiting information
    
    # test for edit name
    # I want to change the name to Ji Hwan Kim, first check if it is not equal to Ji Hwan Kim
    # first check if the parameter is not nil
    expect(@degreeFirst.degree_type).to_not eql(nil)

    expect(@degreeFirst.degree_type).to_not eql("Degree A")
    @degreeFirst.update(degree_type: "Degree A")
    expect(@degreeFirst.degree_type).to eql("Degree A")

    # test for edit degree year
    # check if param is not nil
    expect(@degreeFirst.year).not_to eql(nil)

    expect(@degreeFirst.year).to_not eql(2016)
    @degreeFirst.update(year: 2016)
    expect(@degreeFirst.year).to eql(2016)
  end
end

describe Institution, '.edit_Institution_Information' do
  before do
    @institutionFirst = Institution.first
  end

  it 'edits an existing institution information' do
    # test for editing institution information
    # first check if param is not nil
    expect(@institutionFirst.name).to_not eql(nil)

    expect(@institutionFirst.name).to_not eql("University A")
    @institutionFirst.update(name: "University A")
    expect(@institutionFirst.name).to eql("University A")
  end
end

describe Mentorship, '.edit_Mentorship_Information' do
  before do
    @mentorshipFirst = Mentorship.first
    @person = Person
  end

  it 'edits an existing mentorship information' do
    # test for editing mentorship information
    # first check if param is not nil
    @mId = @mentorshipFirst.mentor_id
    expect(@mId).to_not eql(nil)

    @mentor = @person.find_by_id(@mId)

    expect(@mentor.name).to_not eql("Mentor A")
    @mentor.update(name: "Mentor A")
    expect(@mentor.name).to eql("Mentor A")
  end
end

describe Supervision, '.edit_Supervision_Information' do
  before do
    @supervisionFirst = Supervision.first
    @person = Person
  end

  it 'edits an exsiting supervision information' do
    # test for editing supervision information
    # first check if param is not nil
    @sId = @supervisionFirst.supervisor_id
    expect(@sId).to_not eql(nil)

    @supervisor = @person.find_by_id(@sId)

    expect(@supervisor.name).to_not eql("Supervisor A")
    @supervisor.update(name: "Supervisor A")
    expect(@supervisor.name).to eql("Supervisor A")
  end
end

describe Person, '.check_Admin_Approval' do
  before do
    @personLast = Person.last
  end

  it '.checks the admin approval' do
    # test for checking admin approval
    expect(@personLast.approved).to eql(true)
    @personLast.update(approved: false)
    expect(@personLast.approved).to eql(false)
  end
end

describe Institution, '.check_Admin_Approval' do
  before do
    @institutionLast = Institution.last
  end

  it '.checks the admin approval' do
    # test for checking admin approval
    expect(@institutionLast.approved).to eql(false)
    @institutionLast.update(approved: true)
    expect(@institutionLast.approved).to eql(true)
  end
end

describe Mentorship, '.check_Admin_Approval' do
  before do
    @mentorshipLast = Mentorship.last
  end

  it '.checks the admin approval' do
    # test for checking admin approval
    expect(@mentorshipLast.approved).to eql(false)
    @mentorshipLast.update(approved: true)
    expect(@mentorshipLast.approved).to eql(true)
  end
end

describe Supervision, '.check_Admin_Approval' do
  before do
    @supervisionLast = Supervision.last
  end

  it '.checks the admin approval' do
    # test for checking admin approval
    expect(@supervisionLast.approved).to eql(false)
    @supervisionLast.update(approved: true)
    expect(@supervisionLast.approved).to eql(true)
  end
end

describe Degree, '.check_Admin_Approval' do
  before do
    @degreeLast = Degree.last
  end

  it '.checks the admin approval' do
    # test for checking admin approval
    expect(@degreeLast.approved).to eql(false)
    @degreeLast.update(approved: true)
    expect(@degreeLast.approved).to eql(true)
  end
end