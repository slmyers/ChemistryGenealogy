class Supervision < ActiveRecord::Base
  belongs_to :degree, :class_name => 'Degree'
  belongs_to :person, :class_name => 'Person'
  belongs_to :supervisor, :class_name => 'Person'

  #track changes
  has_paper_trail on: [:update, :create]#will remove create, only used to help implement

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

  # Returns serialized supervision with degree information
  def serializer_for_supervision(supervision)
    result = Api::SupervisionSerializer.new(self).serializable_hash

    degree = Degree.find_by(id: degree_id)
    result[:year] = degree.year
    result[:supervisor] = Person.find_by(:id => supervision.supervisor_id).name
    result[:institution] = Institution.find_by(id: degree.institution_id).name
    result[:type] = degree.degree_type

    result[:degree_id] = degree.id
    result[:degree_approved] = degree.approved
    result = result.except(:id, :approved)
    result[:supervision_id] = supervision.id
    result[:supervision_approved] = supervision.approved
    return result
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
