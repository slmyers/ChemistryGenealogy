# kind of pointless test, but this really just ensures that the testing
# framework is properly set up.
require_relative '../../app/models/api/person.rb'
require_relative '../../app/models/api.rb'

describe Person do
  it 'is instantiable' do
    expect(Person.new).not_to eql(nil)
  end
end
