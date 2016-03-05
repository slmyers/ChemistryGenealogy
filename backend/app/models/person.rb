class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  # creates a new person with the submitted information
  # lower cases the position entered
  # adds a new institution if it doesn't exist
  # only checks to see if the name exists in the database
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    name = name.downcase
    position = position.downcase
    institution_id = FindId.institution(institution_name)

    person = Person.create_with(position: position,
                                institution_id: institution_id,
                                approved: false)
                    .find_or_create_by(name: name)
    return person
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
