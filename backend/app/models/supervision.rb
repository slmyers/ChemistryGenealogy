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

    supervision = Supervision.create_with(approved: false)
                            .find_or_create_by(degree_id: degree_id,
                                                person_id: person_id,
                                                supervisor_id: supervisor_id)
    return supervision
  end

  # Updates the supervisions and degrees that the person has
  def Supervision.update_supervision(id, name, supervision_array_received)

    # Creates an array of supervision ids that are connected to the person in
    # the database
    supervision_array = Array.new
    supervision_find = Supervision.where(:person_id => id)
    supervision_find.each do |single|
      supervision_array.push(single.id)
    end

    # Check that supervision_array is not nil
    unless supervision_array.nil?

      # Check that the supervision_array_received is not nil
      unless supervision_array_received.nil?

        # For each supervision in the supervision_array_received, check if it
        # exists in the supervision_array.
        # If so, then update. If not, create a new supervision and degree
        supervision_array_received.each do |supervision|

          # If the supervision is new, then the supervision[:supervision_id]
          # should be nil
          # Maybe this as well: if supervision_array.include? supervision[:supervision_id]
          unless supervision[:supervision_id].nil?

            # Check if the supervisor has changed. If so, then get new id.
            # Gets the supervision object and the supervisor person object
            # from the database to compare
            # See if there's a matching supervisor in the database and update
            # if it's not the same
            supervisor_id = FindId.person(supervision[:supervisor])
            supervision_object = Supervision.find(supervision[:supervision_id])
            if supervision_object.person_id != supervisor_id
              Supervision.update(supervision[:supervision_id], supervisor_id: supervisor_id)
            end

            # Find or create the degree id from the database
            # If it is not the same as supervision[:degree_id], then update
            # supervision with the new id
            # * Since multiple people may have the same degree, it may be best
            # not to update the degree in the database *
            degree_id = FindId.degree(supervision[:year],
                                      supervision[:type],
                                      supervision[:institution])
            if degree_id != supervision[:degree_id]
              Supervision.update(supervision[:supervision_id], degree_id: degree_id)
            end

            # Remove id from the supervision_array
            supervision_array.delete(supervision[:supervision_id])

          # If the supervision[:supervision_id] is nil, then it is new so create
          # a new supervision and degree
          else
            Degree.new_degree(supervision[:year], supervision[:type], supervision[:institution])
            Supervision.new_supervision(supervision[:year],
                                        supervision[:type],
                                        supervision[:institution],
                                        name,
                                        supervision[:supervisor])
          end
        end

        # If there are any supervisions left in supervision_array, delete them
        unless supervision_array.nil?
          supervision_array.each do |supervision_id|
            Supervision.delete(supervision_id)
          end
        end

      # If the supervision_array_received is nil (person has no degrees/supervisions)
      # Then delete all supervisions in the supervision_array
      else
        supervision_array.each do |supervision_id|
          Supervision.delete(supervision_id)
        end
      end

    # If there are no supervisions connected to the person, create new
    # supervisions and degrees for the person as long as supervision_array_received
    # is not nil either
    # In this case, degree_id, degree_approved, supervision_id, and supervision_approved
    # are all nil
    else
      unless supervision_array_received.nil?
        supervision_array_received.each do |supervision|
          Degree.new_degree(supervision[:year], supervision[:type], supervision[:institution])
          Supervision.new_supervision(supervision[:year],
                                      supervision[:type],
                                      supervision[:institution],
                                      name,
                                      supervision[:supervisor])
        end
      end
    end



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
