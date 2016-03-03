class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisions

  # finds the degree_id based on the year, degree_type, and institution_name
  # creates a new degree if not found and then returns the id
  # I really want to make these methods look cleaner somehow...
  def Degree.find_degree_id(year, degree_type, institution_name)
    degree_type = degree_type.downcase
    institution_id = Institution.find_institution_id(institution_name)

    unless Degree.exists?(:year => year,
                          :degree_type => degree_type,
                          :institution_id => institution_id)
      Degree.new_degree(year, degree_type, institution_name)
    end
      degree_id = Degree.find_by(:year => year,
                                :degree_type => degree_type,
                                :institution_id => institution_id).id
      return degree_id
  end

  # creates a new degree
  # also checks if there is already an existing degree before adding
  def Degree.new_degree(year, degree_type, institution_name)
    degree_type = degree_type.downcase
    institution_id = Institution.find_institution_id(institution_name)

    unless Degree.exists?(:year => year,
                          :degree_type => degree_type,
                          :institution_id => institution_id)
      return Degree.new(year: year,
                        degree_type: degree_type,
                        institution_id: institution_id,
                        approved: false)
    end
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
