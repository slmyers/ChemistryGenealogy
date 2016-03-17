class Institution < ActiveRecord::Base
  has_many :people
  has_many :degrees

  

  # creates a new institution with the name given
  def Institution.new_institution(name)
    name = name.downcase

    institution = Institution.create_with(approved: false)
                              .find_or_create_by(name: name)
    return institution
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
