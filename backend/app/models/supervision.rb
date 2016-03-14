class Supervision < ActiveRecord::Base
  belongs_to :degree, :class_name => 'Degree'
  belongs_to :person, :class_name => 'Person'
  belongs_to :supervisor, :class_name => 'Person'

  # creates a new supervisor
  # for this one, since it should only be called when adding a new supervisor
  # when we're in the middle of adding a new degree, maybe the parameters
  # should be found beforehand?
  # probably after a new degree is created so that the degree_id can be found?
  # right now, it's taking all the requirements for the degree_id so that
  # it can be found within new_supervision
  def Supervision.new_supervision(degree_year,
                                  degree_type,
                                  institution_name,
                                  person_name,
                                  supervisor_name)

    degree_id = FindId.degree(degree_year, degree_type, institution_name)
    person_id = FindId.person(person_name)
    supervisor_id = FindId.mentor_supervisor(supervisor_name, institution_name)

    supervison = Supervision.create_with(approved: false)
                            .find_or_create_by(degree_id: degree_id,
                                                person_id: person_id,
                                                supervisor_id: supervisor_id)
    return supervison
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
