class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  #track changes
  has_paper_trail on: [:update], :ignore => [:created_at, :updated_at, :approved, :id]#ignores pointless attributes, only on update

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

  # takes input name to find the person then return json object of person
  def serializer_for_person(person_object)
    unless person_object.institution_id.nil?
      institution_object = Institution.find(person_object.institution_id)
      institution_name = institution_object.name
    end

    result = Api::PersonSerializer.new(self).serializable_hash
    result[:currentInstitutionName] = institution_name
    result[:currentPositionTitle] = person_object.position

    person_id = person_object.id

    postdoc_array = Array.new
    postdoc_list = Mentorship.where(:person_id => person_id)
    postdoc_list.each do |single|
      postdoc = single.serializer_for_mentorship(single)
      postdoc_array.push(postdoc)
    end
    result[:postDocInformation] = postdoc_array

    supervision_array = Array.new
    supervision_list = Supervision.where(:person_id => person_id)

    supervision_list.each do |single|
      supervision = single.serializer_for_supervision(single)
      supervision_array.push(supervision)
    end
    result[:degreeInformation] = supervision_array

    return result.to_json
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end

end
