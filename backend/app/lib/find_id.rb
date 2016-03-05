class FindId

  # finds a person's id given the name
  # creates a new person with nil position and institution if it doesn't exist
  # therefore, when creating a new person that has mentorships and supervisons,
  # probably create the person first before creating the mentorships and
  # supervisons
  def self.person(name)
    name = name.downcase

    Person.create_with(position: nil, institution_id: nil, approved: false)
          .find_or_create_by(name: name)
    person_id = Person.find_by(name: name).id
    return person_id
  end

  # finds a mentor or supervisor's id given the name
  # creates a new person with the given institution and nil position if it
  # doesn't exist
  # only checks for the name; it won't create a new person if the institution
  # is different
  def self.mentor_supervisor(mentor_supervisor_name, institution_name)
    mentor_supervisor_name = mentor_supervisor_name.downcase
    institution_name = institution_name.downcase
    institution_id = self.institution(institution_name)

    Person.create_with(position: nil, institution_id: institution_id, approved: false)
          .find_or_create_by(name: mentor_supervisor_name)
    mentor_supervisor_id = Person.find_by(name: mentor_supervisor_name).id
    return mentor_supervisor_id
  end

  # finds the institution id given the name
  # creates a new institution if it doesn't exist and returns that id
  def self.institution(name)
    name = name.downcase

    Institution.create_with(approved: false).find_or_create_by(name: name)
    institution_id = Institution.find_by(name: name).id
    return institution_id
  end

  # finds the degree_id based on the year, degree_type, and institution_name
  # creates a new degree if not found and then returns the id
  def self.degree(year, degree_type, institution_name)
    degree_type = degree_type.downcase
    institution_id = self.institution(institution_name)

    Degree.create_with(approved: false)
          .find_or_create_by(year: year,
                              degree_type: degree_type,
                              institution_id: institution_id)
    degree_id = Degree.find_by(:year => year,
                                :degree_type => degree_type,
                                :institution_id => institution_id).id
    return degree_id
  end

end
