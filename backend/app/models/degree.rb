class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisors

  # creates a new degree
  def Degree.new_degree(year, degree_type, institution_id)
    institution_id = Institution.find_id(institution_name)
    return Degree.new(year: year,
                      degree_type: degree_type,
                      institution_id: institution_id,
                      approved: false
                      )
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
