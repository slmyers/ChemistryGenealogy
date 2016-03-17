class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisions


  # creates a new degree
  # also checks if there is already an existing degree before adding
  def Degree.new_degree(year, degree_type, institution_name)
    degree_type = degree_type.downcase
    institution_id = FindId.institution(institution_name)

    degree = Degree.create_with(approved: false)
                    .find_or_create_by(year: year,
                                        degree_type: degree_type,
                                        institution_id: institution_id)
    return degree
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
