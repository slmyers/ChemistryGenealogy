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
  # @note Since the postdocs themselves cannot be edited, this will only update the postdocs connected to a person
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

      # Check that the mentorship array is not nil
      unless mentorship_array.nil?

        # Check that the mentorship_array_received is not nil
        unless mentorship_array_received.nil?

          # For each mentorship in the mentorship_array_received,
          # see if it already exists in the database
          # IF so, then the mentorship is present and can be removed from the mentorship_array
          # as well as the mentorship_array_received
          mentorship_array_received.each do |mentorship|
            if mentorship.has_key?(:id)
              mentorship_array.delete(mentorship[:id])
              mentorship_array_received.delete(mentorship)
            end
          end

          # The results left are ones that were either deleted or new
          # Check if mentorship_array is not empty
          unless mentorship_array.empty?

            # Check if the mentorship_array_received is not empty
            unless mentorship_array_received.empty?

              # For each of the ids left in the array, update them with a new postdoc information
              mentorship_array.each do |mentorship_id|
                unless mentorship_array_received.empty?
                  new_mentorship = mentorship_array_received[0]
                  mentor_id = FindId.person(new_mentorship[:pdSupervisor])
                  institution_id = FindId.institution(new_mentorship[:pdInstitution])
                  Mentorship.update(mentorship_id, mentor_id: mentor_id)
                  Mentorship.update(mentorship_id, institution_id: institution_id)
                  Mentorship.update(mentorship_id, start: new_mentorship[:pdStartYear])
                  Mentorship.update(mentorship_id, end: new_mentorship[:pdEndYear])

                  mentorship_array.delete(mentorship_id)
                  mentorship_array_received.delete(new_mentorship)
                end
              end

              # If there are any mentorships left in the mentorship_array, delete them
              unless mentorship_array.empty?
                mentorship_array.each do |mentorship_id|
                  Mentorship.delete(mentorship_id)
                end
              end

              # If there are any mentorships left in the mentorship_array_received, create them
              unless mentorship_array_received.empty?
                mentorship_array_received.each do |mentorship|
                  Mentorship.new_mentorship(person_name,
                                            mentorship[:pdSupervisor],
                                            mentorship[:pdInstitution],
                                            mentorship[:pdStartYear],
                                            mentorship[:pdEndYear])
                end
              end

            # If the mentorship_array_received is empty,
            # then the rest of the mentorships connected to the person are removed from the database
            else
              mentorship_array.each do |mentorship_id|
                Mentorship.delete(mentorship_id)
              end
            end
          # If it is empty, add remaining mentorships to the database
          else
            unless mentorship_array_received.empty?
              mentorship_array_received.each do |mentorship|
                Mentorship.new_mentorship(person_name,
                                          mentorship[:pdSupervisor],
                                          mentorship[:pdInstitution],
                                          mentorship[:pdStartYear],
                                          mentorship[:pdEndYear])
              end
            end
          end

        # If the mentorship_array_received is nil (or the person no longer has mentorships),
        # then all mentorships connected to the person are removed from the database
        else
          mentorship_array.each do |mentorship_id|
            Mentorship.delete(mentorship_id)
          end
        end

      # If mentorship_array is nil (or person has no mentorships),
      # then if mentorship_array_received (or the mentorships received from edit page)
      # is not nil, then add all of them to the table
      # These should just be using the same format as a new postdoc
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

  # Updates the mentorships that the person supervised.
  # @note This could probably be combined with Mentorship.update_mentorship
  #
  # @param id [Number] id of the person mentored
  # @param person_name [String] name of the person mentored
  # @param mentorship_array_received [Array<Hash{String => String, Number}>] array of the person's postdoc information
  def Mentorship.update_superdoc(id, person_name, mentorship_array_received)

    # Make an array of mentorship ids that are connected to the person in the database
    mentorship_array = Array.new
    mentorship_list = Mentorship.where(:mentor_id => id)
    mentorship_list.each do |mentorship_single|
      mentorship_array.push(mentorship_single.id)
    end

    # Check that the mentorship array is not nil
    unless mentorship_array.nil?

      # Check that the mentorship_array_received is not nil
      unless mentorship_array_received.nil?

        # For each mentorship in the mentorship_array_received,
        # see if it already exists in the database
        # IF so, then the mentorship is present and can be removed from the mentorship_array
        # as well as the mentorship_array_received
        mentorship_array_received.each do |mentorship|
          if mentorship.has_key?(:id)
            mentorship_array.delete(mentorship[:id])
            mentorship_array_received.delete(mentorship)
          end
        end

        # The results left are ones that were either deleted or new
        # Check if mentorship_array is not empty
        unless mentorship_array.empty?

          # Check if the mentorship_array_received is not empty
          unless mentorship_array_received.empty?

            # For each of the ids left in the array, update them with a new postdoc information
            mentorship_array.each do |mentorship_id|
              unless mentorship_array_received.empty?
                new_mentorship = mentorship_array_received[0]
                mentored_id = FindId.person(new_mentorship[:superDocNameOfPerson])
                institution_id = FindId.institution(new_mentorship[:superDocInstitution])
                Mentorship.update(mentorship_id, person_id: mentored_id)
                Mentorship.update(mentorship_id, institution_id: institution_id)
                Mentorship.update(mentorship_id, start: new_mentorship[:superDocStartYear])
                Mentorship.update(mentorship_id, end: new_mentorship[:superDocEndYear])

                mentorship_array.delete(mentorship_id)
                mentorship_array_received.delete(new_mentorship)
              end
            end

            # If there are any mentorships left in the mentorship_array, delete them
            unless mentorship_array.empty?
              mentorship_array.each do |mentorship_id|
                Mentorship.delete(mentorship_id)
              end
            end

            # If there are any mentorships left in the mentorship_array_received, create them
            unless mentorship_array_received.empty?
              mentorship_array_received.each do |mentorship|
                Mentorship.new_mentorship(mentorship[:superDocNameOfPerson],
                                          person_name,
                                          mentorship[:superDocInstitution],
                                          mentorship[:superDocStartYear],
                                          mentorship[:superDocEndYear])
              end
            end

          # If the mentorship_array_received is empty,
          # then the rest of the mentorships connected to the person are removed from the database
          else
            mentorship_array.each do |mentorship_id|
              Mentorship.delete(mentorship_id)
            end
          end
        # If mentorship_array empty, add remaining mentorships to the database
        else
          unless mentorship_array_received.empty?
            mentorship_array_received.each do |mentorship|
              Mentorship.new_mentorship(mentorship[:superDocNameOfPerson],
                                        person_name,
                                        mentorship[:superDocInstitution],
                                        mentorship[:superDocStartYear],
                                        mentorship[:superDocEndYear])
            end
          end
        end

      # If the mentorship_array_received is nil (or the person no longer has mentorships they supervised),
      # then all mentorships connected to the person are removed from the database
      else
        mentorship_array.each do |mentorship_id|
          Mentorship.delete(mentorship_id)
        end
      end

    # If mentorship_array is nil (or person has no mentorships they supervised),
    # then if mentorship_array_received (or the mentorships received from edit page)
    # is not nil, then add all of them to the table
    # These should just be using the same format as a new postdoc
    else
      unless mentorship_array_received.nil?
        mentorship_array_received.each do |mentorship|
          Mentorship.new_mentorship(mentorship[:superDocNameOfPerson],
                                    person_name,
                                    mentorship[:superDocInstitution],
                                    mentorship[:superDocStartYear],
                                    mentorship[:superDocEndYear])
        end
      end
    end
  end

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
