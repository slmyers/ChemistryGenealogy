class Supervisor < ActiveRecord::Base
  belongs_to :degree, :class_name => 'Degree'
  belongs_to :person, :class_name => 'Person'
  belongs_to :supervisor, :class_name => 'Person'

  def Supervisor.new_supervisor(supervisor_name, degree_id, person_id, supervisor_id)
    return Supervisor.new(supervisor_name: name, degree_id: degree_id, person_id: person_id, supervisor_id: supervisor_id, approved: false)
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
