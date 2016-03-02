class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisors

  # creates a new degree object
  # should really think about putting the instutition_id part somewhere else
  def Degree.new_degree(year, degree_type, institution_id)
    lowercase_name_institution = institution_name.downcase
    unless Institution.exists?(:name => lowercase_name_institution)
      Institution.new_institution(lowercase_name_institution)
    end
    @institution_id = Institution.find_by(name: lowercase_name_institution).id
    return Degree.new(year: year, degree_type: degree_type, institution_id: @institution_id, approved: false)
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
