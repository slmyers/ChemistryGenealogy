class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  # finds a person's id given the name
  # creates a new person with nil position and institution if it doesn't exist
  # therefore, when creating a new person that has mentorships and supervisons,
  # probably create the person first before creating the mentorships and
  # supervisons
  def Person.find_person_id(name)
    name = name.downcase
    unless Person.exists?(:name => name)
      Person.new_person(name, nil, nil)
    end
    person_id = Person.find_by(name: name).id
    return person_id
  end

  # finds a mentor or supervisor's id given the name
  # creates a new person with the given institution and nil position if it
  # doesn't exist
  # not sure if this should actually be put in mentorhsip or supervision instead
  def Person.find_mentor_supervisor_id(mentor_supervisor_name, institution_name)
    mentor_supervisor_name = mentor_supervisor_name.downcase
    institution_name = institution_name.downcase
    unless Person.exists?(:name => mentor_supervisor_name)
      Person.new_person(mentor_supervisor_name, nil, institution_name)
    end
    mentor_supervisor_id = Person.find_by(name: mentor_supervisor_name).id
    return mentor_supervisor_id
  end

  # creates a new person with the submitted information
  # lower cases the position if it's not nil
  # adds a new institution if it doesn't exist and it is not nil
  # (not sure if this is supposed to be in controller?)
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    name = name.downcase

    unless position.nil?
      position = position.downcase
    end

    unless institution_name.nil?
      institution_id = Institution.find_institution_id(institution_name)
    else
      institution_id = institution_name
    end

    return Person.new(name: name,
                      position: position,
                      institution_id: institution_id,
                      approved: false)
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
