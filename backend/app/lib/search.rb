class Search
  @type

  def initialize(type)
    @type = type
  end

  def guard(type)
    if type != 'PERSON' || type != 'INSTITUTION'
      return false
    end
    return true
  end



end
