
describe AutoComplete do
  it "is instantiable" do
    @auto = AutoComplete.new
    expect(@auto).not_to eql(nil)
  end

  it "any empty string will return all people and institutions linked to them" do
    @res = AutoComplete.find('')
    @people = @res["people"]
    @people_count = Person.count
    expect(@people_count == @people.length).to be(true)

    @institutions = @res["institutions"]
    expect(@institutions.length > 0).to be(true)
    @people.each do |p|
      if p.institution_id != nil
        expect(@institutions.find(p.institution_id)).not_to eql(nil)
      end
    end
  end

  it "no will return 1 result + 1 institutions" do
    @res = AutoComplete.find('no')
    @people = @res["people"]
    expect(@people.length == 1).to be(true)
    expect(@people.first.name == 'no relations').to be(true)
    @institutions = @res["institutions"]
    expect(@institutions.length == 1).to be(true)
    expect(@institutions.first.name == 'university of alberta').to be(true)
    expect(@institutions.find(@people.first.institution_id)).not_to eql(nil)
  end
end
