# spec test for information in general
describe Person, '.new_person' do
  before do
    @person = Person
  end

  it 'creates a new person to db' do
    # this test will fail since the new name doesn't exist in db yet
    # the name "Ji Hwan Kim" is not on the db yet
    expect(@person.find_by_name("Ji Hwan Kim")).not_to eql(1)
    @person.new_person("Ji Hwan Kim", "Doctorate", "University of Alberta")
    # check if the person got created in db
    expect(@person.find_by_name("Ji Hwan Kim")).not_to eql(0)
  end
end

describe Institution, '.new_institution' do
  before do
    @institution = Institution
  end

  it 'creates a new institution to db' do
    # this test will fail since the new name doesn't exist in db yet
    expect(@institution.find_by_name("University A")).not_to eql(1)
    @institution.new_institution("University A")
    # check if the person got created in db
    expect(@institution.find_by_name("University A")).not_to eql(0)
  end
end

describe Mentorship, '.new_mentorship' do
  before do
    @person = Person
    @mentorship = Mentorship
  end

  it 'creates a new mentorship to db' do
    # this test will fail since there is only 10 ids in the person db
    expect(@person.find_by_id(11)).not_to eql(1)
    # this test will fail since there is only 6 ids in the mentorship db
    expect(@mentorship.find_by_id(7)).not_to eql(1)
    @mentorship.new_mentorship("Ji Hwan Kim", "Mentor A", "University of Alberta", "2014", "2016")
    # check if the person and mentorship got created in db
    expect(@person.find_by_id(11)).not_to eql(0)
    expect(@mentorship.find_by_id(7)).not_to eql(0)
  end
end

describe Supervision, '.new_supervision' do
  before do
    @person = Person
    @supervision = Supervision
  end

  it 'creates a new supervision to db' do
    # this test should fail as there are only 4 supervisions in db
    expect(@person.find_by_id(11)).not_to eql(1)
    expect(@supervision.find_by_id(5)).not_to eql(1)
    @supervision.new_supervision("2016", "Doctorate", "University of Alberta", "Ji Hwan Kim", "Supervisor A")
    # check if the supervision got created in db
    expect(@supervision.find_by_id(5))
    expect(@person.find_by_id(11)).not_to eql(0)
  end
end

describe Degree, '.new_degree' do
  before do
    @degree = Degree
  end

  it 'creates a new degree to db' do
    # this test should fail as there are only 4 degrees in db
    expect(@degree.find_by_id(5)).not_to eql(1)
    @degree.new_degree("2016", "Doctorate", "University of Alberta")
    # check if the supervision got created in db
    expect(@degree.find_by_id(5)).not_to eql(0)
  end
end

