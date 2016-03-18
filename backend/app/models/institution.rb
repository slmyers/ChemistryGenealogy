# Model for handling institutions
class Institution < ActiveRecord::Base
  has_many :people
  has_many :degrees

  # Creates a new institution
  #
  # @param name [String] name of the institution
  # @return [Hash{String => String, Number}] created institution
  def Institution.new_institution(name)
    name = name.downcase

    institution = Institution.create_with(approved: false)
                              .find_or_create_by(name: name)
    return institution
  end

  # Handles rendering an institution in a JSON format.
  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
