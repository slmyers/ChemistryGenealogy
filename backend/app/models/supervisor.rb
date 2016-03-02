class Supervisor < ActiveRecord::Base
  belongs_to :degree, :class_name => 'Degree'
  belongs_to :person, :class_name => 'Person'
  belongs_to :supervisor, :class_name => 'Person'

  # creates a new supervisor
  # for this one, since it should only be called when adding a new supervisor
  # when we're in the middle of adding a new degree, the parameters should
  # already be found beforehand?
  # probably after a new degree is created so that the degree_id can be found?
  def Supervisor.new_supervisor(supervisor_name, degree_id, person_id, supervisor_id)
    return Supervisor.new(supervisor_name: supervisor_name,
                          degree_id: degree_id,
                          person_id: person_id,
                          supervisor_id: supervisor_id,
                          approved: false
                          )
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
