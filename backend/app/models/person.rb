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

  # finds and returns details of a person
  # need to work on moving these functions to another class_name
  # also need to redo the models again with the new logic
  def Person.find_person_details(name)
    name = name.downcase

    person_id = Person.find_person_id(name)
    person = Person.find(person_id)
    person_position = person.position
    person_institution = Institution.find(person.institution_id)
    person_institution = person_institution.name

    # make an array of postdocs that are connected to the person
    postdoc_array_raw = Mentorship.where(:person_id => person_id)
    postdoc_array = Array.new
    postdoc_array_raw.each do |postdoc_single|
      postdoc_array.push(postdoc_single)
    end

    # make an array of degrees that are connected to the person
    degree_find_id_array = Supervision.where(:person_id => person_id)
    degree_id_array = Array.new
    degree_array = Array.new

    degree_find_id_array.each do |degree_single|
      unless degree_id_array.include? degree_single.degree_id
        degree_id_array.push(degree_single.degree_id)
      end
    end

    degree_id_array.each do |degree_single_id|
      degree = Degree.find(degree_single_id)
      degree_array.push(degree)
    end

    return name, person_position, person_institution, degree_array, postdoc_array

  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
