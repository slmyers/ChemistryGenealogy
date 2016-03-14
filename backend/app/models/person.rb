class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  # assuming that all parameters are being sent and any sections not filled by the user
  # are converted to nil before getting sent to the backend
  # consider putting this in a different method or model?
  def Person.submit_handling(name, position, institution_name, postdoc_array, degree_array)
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
  # assumes that all information is entered and no fields are nil
  # whichever fields are passed in as nil to this method are unchanged from before
  # in other words, anything in the object that's not nil has to be changed
  # uses the person's id to know which ones to check and change if needed
  # definitely going to put this somewhere else
  def Person.update_handling(id, name, position, institution_name, postdoc_array, degree_array)

    # updates if the person's name is not nil
    unless name.nil?
      Person.update(id, name: name)
    end

    # updates if the person's posiiton is not nil
    unless position.nil?
      Person.update(id, position: position)
    end

    # updates if the person's institution is not nil
    # find the new institution's id
    unless institution_name.nil?
      institution_id = FindId.institution(institution_name)
      Person.update(id, institution_id: institution_id)
    end

    # make an array of postdoc ids that are connected to the person
    # need to handle if the array is empty
    postdoc_array = Array.new
    postdoc_list = Mentorship.where(:person_id => id)
    postdoc_list.each do |postdoc_single|
      postdoc_array.push(postdoc_single.id)
    end

    # check if the postdoc array is nil
    unless postdoc.nil?

      # see if the id exists in postdoc_array
      # if so, check that all fields are the same
      # if not, add it to the database
      postdoc.each do |postdoc_single|

        # if it's inside the array, update all new information
        # remove the id from the array to keep track of what's done
        if postdoc_array.include? postdoc_single.id
          mentor_id = FindId.person(postdoc_single[:pdSupervisor])
          institution_id = FindId.institution(postdoc_single[:pdInstitution])
          Mentorship.update(postdoc_single[:id],
                            mentor_id: mentor_id,
                            institution_id: institution_id,
                            start: postdoc_single[:pdStartYear],
                            end: postdoc_single[:pdEndYear]
                            )
          postdoc_array.delete(postdoc_single.id)

        # if not, then add it to the database
        else
          Mentorship.new_mentorship(name,
                                    postdoc_single[:pdSupervisor],
                                    postdoc_single[:pdInstitution],
                                    postdoc_single[:pdStartYear],
                                    postdoc_single[:pdEndYear])
        end
      end
    end

    # for each id in the postdoc_array that's left, remove entry from database
    # these should be ones that were deleted on the edit information page
    # also, if the postdoc from the object is nil then all postdocs are removed
    # from the person
    # remove the postdocs from database?
    # should call delete otherwise everything about the person might be deleted
    unless postdoc_array.nil?
      postdoc_array.each do |postdoc_single|
        Mentorship.delete(postdoc_single)
      end
    end

    # # checks that postdoc_array is not null before adding new mentorships
    # unless postdoc_array.nil?
    #   postdoc_array.each do |postdoc|
    #     Mentorship.new_mentorship(name, postdoc[:pdSupervisor], postdoc[:pdInstitution],
    #       postdoc[:pdStartYear], postdoc[:pdEndYear])
    #   end
    # end
    #
    # # checks that degree_array is not nil before adding new degrees and
    # # supervisions
    # unless degree_array.nil?
    #   degree_array.each do |degree|
    #     Degree.new_degree(degree[:year], degree[:type], degree[:institution])
    #     Supervision.new_supervision(degree[:year], degree[:type], degree[:institution], name, degree[:supervisor])
    #   end
    # end
    #
    # return person
  end

  # creates a new person with the submitted information
  # lower cases the position entered
  # adds a new institution if it doesn't exist
  # only checks to see if the name exists in the database
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    name = name.downcase

    unless position.nil?
      position = position.downcase
    end

    unless institution_name.nil?
      institution_id = FindId.institution(institution_name)
    end

    person = Person.create_with(position: position,
                                institution_id: institution_id,
                                approved: false)
                    .find_or_create_by(name: name)
    return person
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
