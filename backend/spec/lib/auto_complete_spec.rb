# @author Steven Myers
# the autocomplete class is tested against data in /lib/tasks/test_data.rake 
describe AutoComplete do
  it "is instantiable" do
    @auto = AutoComplete.new
    expect(@auto).not_to eql(nil)
  end

  it "any empty string will return all people" do
    @res = AutoComplete.find_names('')
    @count = @res.length
    @people_count = Person.count
    expect(@people_count == @count).to be(true)
  end

  it "no will return 1 result" do
    @res = AutoComplete.find_names('no')
    @count = @res.length
    @people = @res
    expect(@count  == 1).to be(true)
    expect(@people.first.name == 'no relations').to be(true)
  end
end
