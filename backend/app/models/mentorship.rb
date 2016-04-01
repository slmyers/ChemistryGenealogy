# Model for handling mentorships
class Mentorship < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :institution, :class_name => 'Institution'

  # Tracks changes
  has_paper_trail on: [:update], :ignore => [:created_at, :updated_at, :approved, :id]#ignores pointless attributes, only on update


  # Creates a new mentorship.
  #
  # @param person_name [String] name of the person mentored
  # @param mentor_name [String] name of the mentor
  # @param institution_name [String] name of the institution
  # @param start_date [Number] year that the postdoc started
  # @param end_date [Number] year that the postdoc ended
  # @return [Hash{String => String, Number}] created mentorship
  def Mentorship.new_mentorship(person_name, mentor_name, institution_name, start_date, end_date)

    person_id = FindId.person(person_name)
    mentor_id = FindId.mentor_supervisor(mentor_name, institution_name)
    institution_id = FindId.institution(institution_name)

    mentorship = Mentorship.create_with(approved: false)
                            .find_or_create_by(person_id: person_id,
                                                mentor_id: mentor_id,
                                                institution_id: institution_id,
                                                start: start_date,
                                                end: end_date)
    return mentorship
  end

  # Updates the mentorships connected to a person.
  # @note Currently uses a quick-fix. Will hopefully update later.
  #
  # @param id [Number] id of the person mentored
  # @param person_name [String] name of the person mentored
  # @param mentorship_array_received [Array<Hash{String => String, Number}>] array of the person's postdoc information
  def Mentorship.update_mentorship(id, person_name, mentorship_array_received)

    # Make an array of mentorship ids that are connected to the person in the database
    mentorship_array = Array.new
    mentorship_list = Mentorship.where(:person_id => id)
    mentorship_list.each do |mentorship_single|
      mentorship_array.push(mentorship_single.id)
    end

    # Check that mentorship_array is not nil
    unless mentorship_array.nil?

      # Check that mentorship_array_received is not nil
      unless mentorship_array_received.nil?

        # For each mentorship in the mentorship_array_received, see if it
        # already exists in the database
        # If it exists, don't do anything. If not, create it.
        mentorship_array_received.each do |mentorship|

          # Reminder that this function will find or create a mentorship with
          # the required attributes
          mentorship_object = Mentorship.new_mentorship(person_name,
                                                        mentorship[:pdSupervisor],
                                                        mentorship[:pdInstitution],
                                                        mentorship[:pdStartYear],
                                                        mentorship[:pdEndYear])
          mentorship_id = mentorship_object.id

          # If the mentorship is in the mentorship_array, remove from the array
          if mentorship_array.include? mentorship_id
            mentorship_array.delete(mentorship_id)
          end
        end

        # If there's anything left in the mentorship_array after, remove them
        unless mentorship_array.nil?
          mentorship_array.each do |mentorship_id|
            Mentorship.delete(mentorship_id)
          end
        end

      # If the mentorship_array_received is nil, remove all mentorships
      # connected to the person
      else
        mentorship_array.each do |mentorship_id|
          Mentorship.delete(mentorship_id)
        end
      end

    # If mentorship_array is nil (or person has no mentorships),
    # then if mentorship_array_received (or the mentorships received from edit page)
    # is not nil, then add all of them to the table
    else
      unless mentorship_array_received.nil?
        mentorship_array_received.each do |mentorship|
          Mentorship.new_mentorship(person_name,
                                    mentorship[:pdSupervisor],
                                    mentorship[:pdInstitution],
                                    mentorship[:pdStartYear],
                                    mentorship[:pdEndYear])
        end
      end
    end
  end

  #   # Check that mentorship_array is not nil
  #   unless mentorship_array.nil?
  #
  #     # Check that mentorship_array_received is not nil
  #     unless mentorship_array_received.nil?
  #
  #       # For each mentorship in the mentorship_array_received, see if it
  #       # already exists in the database
  #       # If it exists, update it. If not, create it.
  #       mentorship_array_received.each do |mentorship|
  #
  #         # mentorship[:postdoc_id] should be set to nil if it is a new mentorship
  #         # Maybe this instead: if mentorship_array.include? mentorship[:postdoc_id]
  #         unless mentorship[:postdoc_id].nil?
  #
  #           # Person_id should still stay the same. Everything else is updated.
  #           # *There's probably a nicer way of updating all info at once*
  #           mentor_id = FindId.person(mentorship[:pdSupervisor])
  #           institution_id = FindId.institution(mentorship[:pdInstitution])
  #           Mentorship.update(mentorship[:postdoc_id], mentor_id: mentor_id)
  #           Mentorship.update(mentorship[:postdoc_id], institution_id: institution_id)
  #           Mentorship.update(mentorship[:postdoc_id], start: mentorship[:pdStartYear])
  #           Mentorship.update(mentorship[:postdoc_id], end: mentorship[:pdEndYear])
  #
  #           # Remove id from the mentorship_array
  #           mentorship_array.delete(mentorship[:postdoc_id])
  #
  #         # If the mentorship is not in the array, it is a new mentorship that
  #         # must be added (the mentorship[:postdoc_id] should be nil)
  #         else
  #           Mentorship.new_mentorship(person_name,
  #                                     mentorship[:pdSupervisor],
  #                                     mentorship[:pdInstitution],
  #                                     mentorship[:pdStartYear],
  #                                     mentorship[:pdEndYear])
  #         end
  #       end
  #
  #       # If there's anything left in the mentorship_array after, remove them
  #       unless mentorship_array.nil?
  #         mentorship_array.each do |mentorship_id|
  #           Mentorship.delete(mentorship_id)
  #         end
  #       end
  #
  #
  #
  #
  #       end
  #     end
  #   end
  # end

  # Makes a serialized postdoc to be sent to the frontend in a JSON format.
  # @note Could probably take id off if the frontend isn't using it
  #
  # @param mentorship [Hash{String => String, Number}] a person's postdoc
  # @return [Hash{String => String, Number}] serialized postdoc
  def serializer_for_mentorship(mentorship)

    result = Api::MentorshipSerializer.new(self).serializable_hash
    result[:pdStartYear] = mentorship.start
    result[:pdEndYear] = mentorship.end
    result[:pdSupervisor] = Person.find_by(id: mentorship.mentor_id).name
    result[:pdInstitution] = Institution.find_by(id: mentorship.institution_id).name
    result[:pdSupervised] = Person.find_by(id: mentorship.person_id).name
    result = result.except(:id, :approved)
    result[:postdoc_id] = mentorship.id
    result[:postdoc_approved] = mentorship.approved
    return result

  end

  # Handles rendering a mentorship in a JSON format.
  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
