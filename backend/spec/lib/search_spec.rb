# @author Steven Myers
# the search class is tested against data in /lib/tasks/test_data.rake
describe Search do
  it "is instantiable" do
    @search = Search.new()
    expect(@search).not_to eql(nil)
  end

  it "returns 5 required fields in hash" do
    @result = Search.relations_by_id(1)
    expect(@result["target"]).not_to eql(nil)
    expect(@result["mentors"]).not_to eql(nil)
    expect(@result["supervisors"]).not_to eql(nil)
    expect(@result["supervised"]).not_to eql(nil)
    expect(@result["institutions"]).not_to eql(nil)
  end

  it "searches relations by name or id" do
    expect(Search.relations_by_id(3).to_s).to eql(Search.relations_by_name('supervised by person 2').to_s)
  end

  it "returns empty fields for a invalid search" do
    @result = Search.relations_by_id(1337)
    expect(@result["target"].length).to eql(0)
    expect(@result["mentors"].length).to eql(0)
    expect(@result["supervisors"].length).to eql(0)
    expect(@result["supervised"].length).to eql(0)
    expect(@result["institutions"].length).to eql(0)
  end

  it "for every mentor there is a person obj" do
    @result = Search.relations_by_id(11)
    @mentors = @result["mentors"]
    expect(@mentors.length > 0).to be(true)
    expect(@mentors.length == 2).to be(true)
    # test that there is a person for each mentor_id
    @mentors.each do |m|
      expect(m.id).not_to eql(nil)
      expect(m.name).not_to eql(nil)
    end
  end

  # only one supervisor_id in this test
  it "for every supervisor there is a person obj" do
    # TODO: figure out test setup, ie run next line before each test in Search
    @result = Search.relations_by_id(14)
    @supervisors = @result["supervisors"]
    expect(@supervisors.length > 0).to be(true)
    expect(@supervisors.length == 2).to be(true)
    @supervisors.each do |s|
      expect(s.id).not_to eql(nil)
      expect(s.name).not_to eql(nil)
    end
  end

  it "for every supervised there is a person obj" do
    @result = Search.relations_by_id(17)
    @supervised = @result["supervised"]
    @people = @result["people"]
    expect(@supervised.length > 0).to be(true)
    expect(@supervised.length == 2).to be(true)
    @supervised.each do |s|
      expect(s.id).not_to eql(nil)
      expect(s.name).not_to eql(nil)
    end
  end

  it "for every mentee there is a person obj" do
    @result = Search.relations_by_id(18)
    @mentored = @result["mentored"]
    @people = @result["people"]
    expect(@mentored.length > 0).to be(true)
    expect(@mentored.length == 2).to be(true)
    # test that there is a person for each mentor_id
    @mentored.each do |m|
      expect(m.id).not_to eql(nil)
      expect(m.name).not_to eql(nil)
    end
  end


  it "for a person with an institution_id there is an institution" do
    @result = Search.relations_by_id(5)
    @institutions = @result["institutions"]
    @target = @result["target"]
    expect(@institutions.blank?).to be(false)
    expect(@target.blank?).to be(false)
    expect(@institutions.find(@target.institution_id).blank?).to be(false)
  end

# for the every x is linked to the search id
# check app/lib/tasks/test_data.rake
# we're testing that the expected values are there

  it "every supervisor is linked to the search id" do
    @result = Search.relations_by_id(14)
    @supervisors = @result["supervisors"]
    expect(@supervisors.length > 0).to eql(true)
    expect(@supervisors.length == 2).to eql(true)
    expect(@supervisors.find(12).blank?).to eql(false)
    expect(@supervisors.find(13).blank?).to eql(false)
  end

  it "every mentor is linked to the search id" do
    @result = Search.relations_by_id(11)
    @mentors = @result["mentors"]
    expect(@mentors.length > 0).to eql(true)
    expect(@mentors.length == 2).to eql(true)
    expect(@mentors.find(10).blank?).to eql(false)
    expect(@mentors.find(9).blank?).to eql(false)
  end

  it "every supervised is linked to the search id" do
    @result = Search.relations_by_id(17)
    @supervised = @result["supervised"]
    expect(@supervised.length > 0).to eql(true)
    expect(@supervised.length == 2).to eql(true)
    expect(@supervised.find(16).blank?).to eql(false)
    expect(@supervised.find(15).blank?).to eql(false)
  end

  it "every mentored is linked to the search id" do
    @result = Search.relations_by_id(18)
    @mentored = @result["mentored"]
    expect(@mentored.length > 0).to eql(true)
    expect(@mentored.length == 2).to eql(true)
    expect(@mentored.find(19).blank?).to eql(false)
    expect(@mentored.find(20).blank?).to eql(false)
  end

  it "does not contain duplicate instution objs" do
    @result = Search.relations_by_id(5)
    @institutions = @result["institutions"]
    @institution_ids = Array.new
    @institutions.each do |i|
      @institution_ids.push(i.id)
    end
    @institution_set = @institution_ids.to_set
    expect(@institution_set.length == @institution_ids.length).to be(true)
  end

  it "can return all valid relations" do
    @result = Search.relations_by_id(5)
    @mentored = @result["mentored"]
    @supervised = @result["supervised"]
    @mentors = @result["mentors"]
    @supervisors = @result["supervisors"]
    expect(@mentored.blank?).to eql(false)
    expect(@supervised.blank?).to eql(false)
    expect(@mentors.blank?).to eql(false)
    expect(@supervisors.blank?).to eql(false)
  end
end
