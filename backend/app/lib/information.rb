# This class handles information from submit and edit sent to the backend.
class Information

  # Handles the information for submitting a new person's details.
  # @note It assumes that all parameters are filled out by the user.
  #
  # @param name [String] name of the person
  # @param position [String] current position of the person
  # @param institution_name [String] current institution of the person
  # @param postdoc_array [Array<Hash{String => String, Number}>] array of the person's postdoc information
  # @param degree_array [Array<Hash{String => String, Number}>] array of the person's degree information
  # @return person [Hash{String} => String, Number] created person in the database
  def Information.submit_handling(name, position, institution_name, postdoc_array, degree_array)
    person = Person.new_person(name, position, institution_name)

    # Checks that the postdoc_array is not null before adding new mentorships
    unless postdoc_array.nil?
      postdoc_array.each do |postdoc|
        Mentorship.new_mentorship(name, postdoc[:pdSupervisor], postdoc[:pdInstitution],
          postdoc[:pdStartYear], postdoc[:pdEndYear])
      end
    end

    # Checks that degree_array is not nil before adding new degrees and supervisions
    unless degree_array.nil?
      degree_array.each do |degree|
        Degree.new_degree(degree[:year], degree[:type], degree[:institution])
        Supervision.new_supervision(degree[:year], degree[:type], degree[:institution], name, degree[:supervisor])
      end
    end

    return person
  end

  # Handles the information for editing a person's details.
  # @note It assumes that all parameters are filled out by the user.
  #
  # @param name [String] name of the person
  # @param position [String] current position of the person
  # @param institution_name [String] current institution of the person
  # @param postdoc_array [Array<Hash{String => String, Number}>] array of the person's postdoc information
  # @param degree_array [Array<Hash{String => String, Number}>] array of the person's degree information
  def Information.update_handling(name, position, institution_name, postdoc_array, degree_array)

    # Gets the person's information from the People table
    id = FindId.person(name)
    person_object = Person.find(id)

    # Updates if the person's name is not nil
    # Checks if the name is the same. If not, change it.
    unless name.nil?
      if person_object.name != name
        Person.update(id, name: name)
      end
    end

    # Updates if the person's posiiton is not nil
    # Checks if the position is the same. If not, change it.
    unless position.nil?
      if person_object.position !=  position
        Person.update(id, position: position)
      end
    end

    # Updates if the person's institution is not nil
    # Checks if the institution is the same. If not, change it.
    unless institution_name.nil?
      institution_id = FindId.institution(institution_name)
      if person_object.institution_id != institution_id
        Person.update(id, institution_id: institution_id)
      end
    end

    # Update postdocs and degrees respectively
    Mentorship.update_mentorship(id, name, postdoc_array)
    Supervision.update_supervision(id, name, degree_array)
  end
end
