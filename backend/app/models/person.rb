# Model for handling people
class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions


  # Tracks changes
  has_paper_trail on: [:update], :ignore => [:created_at, :updated_at, :approved, :id]#ignores pointless attributes, only on update

  # Creates a new person.
  # @note We have not decided how to handle people with same names
  #
  # @param name [String] name of the person
  # @param position [String] current position of the person
  # @param institution [String] current institution of the person
  # @return person [Hash{String => String}] created person
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

  # Makes a serializable hash for a person to be sent to the frontend in a JSON format.
  #
  # @param person_object [Hash{String => String}] a person's basic information
  # @return result.to_json [Hash{String => String, Array<Hash{String => String, Number}>}] a person's information in JSON format
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

  # Handles rendering a person in a JSON format.
  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end

end
