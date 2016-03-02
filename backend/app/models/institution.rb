class Institution < ActiveRecord::Base
  has_many :people
  has_many :postdocs
  has_many :degrees

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
