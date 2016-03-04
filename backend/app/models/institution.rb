class Institution < ActiveRecord::Base
  has_many :people
  has_many :degrees

  # finds the institution id given the name
  # not sure if this is where this should be or if we actually need it
  # might be in the controller instead
  # basically makes sure the name is lower cased before searching for the id
  # and if it doesn't exist, then it makes a new institution before searching
  # still needs to actually test this
  def Institution.find_institution_id(name)
    name = name.downcase
    unless Institution.exists?(:name => name)
      Institution.new_institution(name)
    end
    institution_id = Institution.find_by(name: name).id
    return institution_id
  end

  # creates a new institution with the name given

  # ***REMEMBER TO REMOVE LOGGER.INFO LATER***

  def Institution.new_institution(name)
    name = name.downcase
    unless Institution.exists?(:name => name)
      logger.info("New institution created")
      return Institution.new(name: name, approved: false)
    end
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
