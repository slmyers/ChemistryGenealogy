require_relative '../../app/models/person.rb'



# sanity checks
describe Person do
  it 'is instantiable' do
    expect(Person.new).not_to eql(nil)
  end

# uncomment if you want to pollute db
#  it 'is saveable' do
#    @person = Person.new( name: "Steven Myers", position: "professor", approved: true,
#                          institution_id: 2)
#    expect(@person.save()).not_to eql(nil)
#    expect(Person.exists?(:name => "Steven Myers")).to be(true)
#  end
end
