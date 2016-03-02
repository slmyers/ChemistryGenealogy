class Institution < ActiveRecord::Base
  has_many :people
  has_many :postdocs
  has_many :degrees

  # finds the institution id given the name
  # not sure if this is where this should be or if we actually need it
  # might be in the controller instead
  # basically makes sure the name is lower cased before searching for the id
  # and if it doesn't exist, then it makes a new institution before searching
  # still needs to actually test this
  def Institution.find_id(name)
    lowercase_name = name.downcase
    unless Institution.exists?(:name => lowercase_name)
      Institution.new_institution(lowercase_name)
    end
    institution_id = Institution.find_by(name: lowercase_name).id
    return institution_id
  end

  # creates a new institution with the name given
  def Institution.new_institution(name)
    lowercase_name = name.downcase
    unless Institution.exists?(:name => lowercase_name)
      return Institution.new(name: lowercase_name, approved: false)
    end
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
