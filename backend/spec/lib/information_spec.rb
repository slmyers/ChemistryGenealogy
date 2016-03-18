# spec test for information in general
describe Person, '.new_person' do
  it 'creates a new person to db' do
    # this test will fail since the new name doesn't exist in db yet
    # the name "Ji Hwan Kim" is not on the db yet
    expect(Person.find_by_name("Ji Hwan Kim")).not_to eql(1)
    @person = Person.new_person("Ji Hwan Kim", "Doctorate", "University of Alberta")
    # check if the person got created in db
    expect(Person.find_by_name("Ji Hwan Kim")).not_to eql(0)
  end
end

describe Institution, '.new_institution' do
  it 'creates a new institutiton to db' do
    # this test will fail since the new name doesn't exist in db yet
    expect(Institution.find_by_name("University A")).not_to eql(1)
    @institution = Institution.new_institution("University A")
    # check if the person got created in db
    expect(Institution.find_by_name("University A")).not_to eql(0)
  end
end

describe Mentorship, '.new_mentorship' do
  it 'creates a new mentorship to db' do
    # this test will fail since there is only 10 ids in the person db
    expect(Person.find_by_id(11)).not_to eql(1)
    # this test will fail since there is only 6 ids in the mentorship db
    expect(Mentorship.find_by_id(7)).not_to eql(1)
    @mentorship = Mentorship.new_mentorship("Ji Hwan Kim", "Mentor A", "University of Alberta", "2014", "2016")
    # check if the person and mentorship got created in db
    expect(Person.find_by_id(11)).not_to eql(0)
    expect(Mentorship.find_by_id(7)).not_to eql(0)
  end
end

describe Supervision, '.new_supervision' do
  it 'creates a new supervision to db' do
    # this test should fail as there are only 4 supervisions in db
    expect(Person.find_by_id(11)).not_to eql(1)
    expect(Supervision.find_by_id(5)).not_to eql(1)
    @supervision = Supervision.new_supervision("2016", "Doctorate", "University of Alberta", "Ji Hwan Kim", "Supervisor A")
    # check if the supervision got created in db
    expect(Supervision.find_by_id(5))
    expect(Person.find_by_id(11)).not_to eql(0)
  end
end

describe Degree, '.new_degree' do
  it 'creates a new degree to db' do
    # this test should fail as there are only 4 degrees in db
    expect(Degree.find_by_id(5)).not_to eql(1)
    @degree = Degree.new_degree("2016", "Doctorate", "University of Alberta")
    # check if the supervision got created in db
    expect(Degree.find_by_id(5)).not_to eql(0)
  end
end

