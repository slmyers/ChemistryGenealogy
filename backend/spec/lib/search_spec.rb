describe Search do
  it "is instantiable" do
    @search = Search.new()
    expect(@search).not_to eql(nil)
  end

  it "returns 5 required fields in hash" do
    @result = Search.relations_by_id(1)
    expect(@result["mentors"]).not_to eql(nil)
    expect(@result["people"]).not_to eql(nil)
    expect(@result["supervisors"]).not_to eql(nil)
    expect(@result["supervised"]).not_to eql(nil)
    expect(@result["institutions"]).not_to eql(nil)
  end

  it "searches relations by name or id" do
    expect(Search.relations_by_id(1).to_s).to eql(Search.relations_by_name('todd lowary').to_s)
  end

  it "returns empty fields for a invalid search" do
    @result = Search.relations_by_id(1337)
    expect(@result["mentors"].length).to eql(0)
    expect(@result["people"].length).to eql(0)
    expect(@result["supervisors"].length).to eql(0)
    expect(@result["supervised"].length).to eql(0)
    expect(@result["institutions"].length).to eql(0)
  end

  it "for every mentor there is a person obj" do
    @result = Search.relations_by_id(1)
    @mentors = @result["mentors"]
    @people = @result["people"]
    expect(@mentors.length > 0).to be(true)
    # test that there is a person for each mentor_id
    @mentors.each do |m|
      if m.mentor_id != nil
        expect(@people.find(m.mentor_id)).not_to eql(nil)
      # if there is no person obj with mentor then there must be a mentor name
      else
        expect(m.mentor_name).not_to eql(nil)
      end
    end
  end

  # only one supervisor_id in this test
  it "for every supervisor there is a person obj" do
    # TODO: figure out test setup, ie run next line before each test in Search
    @result = Search.relations_by_id(1)
    @supervisors = @result["supervisors"]
    @people = @result["people"]
    expect(@supervisors.length > 0).to be(true)
    @supervisors.each do |s|
      if s.supervisor_id != nil
        expect(@people.find(s.supervisor_id)).not_to eql(nil)
      # if there is no person obj with mentor then there must be a mentor name
      else
        expect(s.supervisor_name).not_to eql(nil)
      end
    end
  end

  it "for every supervised there is a person obj" do
    @result = Search.relations_by_id(8)
    @supervised = @result["supervised"]
    @people = @result["people"]
    expect(@supervised.length > 0).to be(true)
    @supervised.each do |s|
      if s.supervisor_id != nil
        expect(@people.find(s.supervisor_id)).not_to eql(nil)
      # if there is no person obj with mentor then there must be a mentor name
      else
        expect(s.supervisor_name).not_to eql(nil)
      end
    end
  end

  it "for every mentee there is a person obj" do
    @result = Search.relations_by_id(8)
    @mentored = @result["mentored"]
    @people = @result["people"]
    expect(@mentored.length > 0).to be(true)
    # test that there is a person for each mentor_id
    @mentored.each do |m|
      if m.mentor_id != nil
        expect(@people.find(m.mentor_id)).not_to eql(nil)
      # if there is no person obj with mentor then there must be a mentor name
      else
        expect(m.mentor_name).not_to eql(nil)
      end
    end
  end


  it "for every person with an institution_id there is an institution" do
    @result = Search.relations_by_id(1)
    @institutions = @result["institutions"]
    @people = @result["people"]

    @people.each do |p|
      if p.institution_id != nil
        expect(@institutions.find(p.institution_id)).not_to eql(nil)
      end
    end
  end

  it "every supervisor is linked to the search id" do
    @result = Search.relations_by_id(8)
    @supervisors = @result["supervisors"]
    expect(@supervisors.length > 0).to eql(true)
    @supervisors.each do |s|
      expect(s.person_id).to eql(8)
    end
  end

  it "every mentor is linked to the search id" do
    @result = Search.relations_by_id(8)
    @mentors = @result["mentors"]
    expect(@mentors.length > 0).to eql(true)
    @mentors.each do |m|
      expect(m.person_id).to eql(8)
    end
  end

  it "every supervised is linked to the search id" do
    @result = Search.relations_by_id(8)
    @supervised = @result["supervised"]
    expect(@supervised.length > 0).to eql(true)
    @supervised.each do |s|
      expect(s.supervisor_id).to eql(8)
    end
  end

  it "every mentored is linked to the search id" do
    @result = Search.relations_by_id(8)
    @mentored = @result["mentored"]
    expect(@mentored.length > 0).to eql(true)
    @mentored.each do |m|
      expect(m.mentor_id).to eql(8)
    end
  end


  it "does not contain duplicate people objs" do
    @result = Search.relations_by_id(8)
    @people = @result["people"]
    @people_ids = Array.new
    @people.each do |p|
      @people_ids.push(p.id)
    end
    @people_set = @people_ids.to_set
    expect(@people_set.length == @people_ids.length).to be(true)
  end

  it "does not contain duplicate instution objs" do
    @result = Search.relations_by_id(8)
    @institutions = @result["institutions"]
    @institution_ids = Array.new
    @institutions.each do |i|
      @institution_ids.push(i.id)
    end
    @institution_set = @institution_ids.to_set
    expect(@institution_set.length == @institution_ids.length).to be(true)
  end

end
