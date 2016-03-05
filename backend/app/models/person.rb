class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  # assuming that all parameters are being sent and any sections not filled by the user
  # are converted to nil before getting sent to the backend
  def Person.info_handling(name, position, institution_name, postdoc_array, degree_array)
    Person.new_person(name, position, institution_name)
    
    postdoc_array.each do |postdoc|
      Mentorship.new_mentorship(name, postdoc[:pdSupervisor], postdoc[:pdInstitution],
        postdoc[:pdStartYear], postdoc[:pdEndYear])
    end

    degree_array.each do |degree|
      Degree.new_degree(degree[:year], degree[:type], degree[:institution])
      Supervision.new_supervision(degree[:year], degree[:type], degree[:institution], name, degree[:supervisor])
    end

  end

  # creates a new person with the submitted information
  # lower cases the position entered
  # adds a new institution if it doesn't exist
  # only checks to see if the name exists in the database
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    name = name.downcase

    unless position.nil?
      position = position.downcase
    end

    unless institution_name.nil?
      institution_id = FindId.institution(institution_name)
    end

    person = Person.create_with(position: position,
                                institution_id: institution_id,
                                approved: false)
                    .find_or_create_by(name: name)
    return person
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
