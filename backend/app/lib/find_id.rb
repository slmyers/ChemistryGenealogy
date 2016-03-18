# This class handles finding or creating ids for different models.
class FindId

  # Finds a person's id in the People table.
  # Creates a new person with nil position and institution if it doesn't exist.
  #
  # @param name [String] name of the person searched for
  # @return [Number] id of the person
  def self.person(name)
    name = name.downcase

    Person.create_with(position: nil, institution_id: nil, approved: false)
          .find_or_create_by(name: name)
    person_id = Person.find_by(name: name).id
    return person_id
  end

  # Finds a mentor or supervisor's id in the People table.
  # Creates a new person with the given institution and nil position if it doesn't exist.
  #
  # @note This only checks for the name. It won't create a new person if only the institution is different
  # @param mentor_supervisor_name [String] name of the mentor or supervisor
  # @return [Number] id of the mentor or supervisor
  def self.mentor_supervisor(mentor_supervisor_name, institution_name)
    mentor_supervisor_name = mentor_supervisor_name.downcase
    institution_name = institution_name.downcase
    institution_id = self.institution(institution_name)

    Person.create_with(position: nil, institution_id: institution_id, approved: false)
          .find_or_create_by(name: mentor_supervisor_name)
    mentor_supervisor_id = Person.find_by(name: mentor_supervisor_name).id
    return mentor_supervisor_id
  end

  # Finds an institution's id in the Institutions table.
  # Creates a new institution if it doesn't exist.
  #
  # @param name [String] name of the institution
  # @return [Number] id of the institution
  def self.institution(name)
    name = name.downcase

    Institution.create_with(approved: false).find_or_create_by(name: name)
    institution_id = Institution.find_by(name: name).id
    return institution_id
  end

  # Finds a degree's id from the Degree table.
  # Creates a new degree if it doesn't exist.
  #
  # @param year [Number] year the degree was awarded
  # @param degree_type [String] type of the degree
  # @param institution_name [String] name of the institution the degree was awarded
  # @return [Number] id of the degree
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
