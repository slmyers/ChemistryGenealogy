require_relative '../../app/lib/search.rb'
require_relative '../../app/models/postdoc.rb'
require_relative '../../app/models/mentor.rb'
require_relative '../../app/models/institution.rb'
require_relative '../../app/models/person.rb'

describe Search do
  it "is instantiable" do
    @search = Search.new()
    expect(@search).not_to eql(nil)
  end

  it "can build a postdoc" do
    @result = Search.postdoc_by_id(1)
    expect(@result).not_to eql(nil)
  end

end
