class Information

  # assuming that all parameters are being sent and any sections not filled by the user
  # are converted to nil before getting sent to the backend
  def Information.submit_handling(name, position, institution_name, postdoc_array, degree_array)
    person = Person.new_person(name, position, institution_name)

    # checks that postdoc_array is not null before adding new mentorships
    unless postdoc_array.nil?
      postdoc_array.each do |postdoc|
        Mentorship.new_mentorship(name, postdoc[:pdSupervisor], postdoc[:pdInstitution],
          postdoc[:pdStartYear], postdoc[:pdEndYear])
      end
    end

    # checks that degree_array is not nil before adding new degrees and
    # supervisions
    unless degree_array.nil?
      degree_array.each do |degree|
        Degree.new_degree(degree[:year], degree[:type], degree[:institution])
        Supervision.new_supervision(degree[:year], degree[:type], degree[:institution], name, degree[:supervisor])
      end
    end

    return person
  end

  # updates a person's information when sent into edit
  # assumes that (same as submit) all information is entered and no fields are nil
  def Information.update_handling(id, name, position, institution_name, postdoc_array, degree_array)

    # Gets the person's information from the People table
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
    Mentorship.update_mentorship(id, person_object.name, postdoc_array)
    Supervision.update_supervision(id, person_object.name, degree_array)
  end

end
