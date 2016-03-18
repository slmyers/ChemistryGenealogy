# Model for handling degrees
class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisions

  # Tracks changes
  has_paper_trail

  # Creates a new degree
  #
  # @param year [Number] year the degree was awarded
  # @param degree_type [String] type of the degree
  # @param institution_name [String] name of the institution the degree was awarded
  # @return [Hash{String => String, Number}] newly created degree
  def Degree.new_degree(year, degree_type, institution_name)
    degree_type = degree_type.downcase
    institution_id = FindId.institution(institution_name)

    degree = Degree.create_with(approved: false)
                    .find_or_create_by(year: year,
                                        degree_type: degree_type,
                                        institution_id: institution_id)
    return degree
  end

  # Handles rendering a degree in a JSON format.
  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
