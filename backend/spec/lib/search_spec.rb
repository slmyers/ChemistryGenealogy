require_relative '../../app/lib/search.rb'

describe Search do
  it "is instantiable" do
    @search = Search.new()
    expect(@search).not_to eql(nil)
  end

  it "can build a postdoc" do
    @result = Search.postdoc_by_id(1)
    expect(@result).not_to eql(nil)
    #expect(@result.mentor).not_to eql(nil)
    #expect(@result.postdoc).not_to eql(nil)
    #expect(@result.institution).not_to eql(nil)
  end

end
