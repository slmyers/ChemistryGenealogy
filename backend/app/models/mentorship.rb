class Mentorship < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :institution, :class_name => 'Institution'

  #track changes
  has_paper_trail on: [:update, :create]#will remove create, only used to help implement

  # creates a new mentorship
  # creates a new person if the person does not exist or the mentor does not
  # exist
  # also creates a new institution if it doesn't exist
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

  def serializer_for_mentorship(mentorship)
    # make an array of postdocs that are connected to the person in json
    # need to check what happens when empty array

    result = Api::MentorshipSerializer.new(self).serializable_hash
    result[:pdStartYear] = mentorship.start
    result[:pdEndYear] = mentorship.end
    result[:pdSupervisor] = Person.find_by(id: mentorship.mentor_id).name
    result[:pdInstitution] = Institution.find_by(id: mentorship.institution_id).name
    result = result.except(:id, :approved)
    result[:postdoc_id] = mentorship.id
    result[:postdoc_approved] = mentorship.approved
    return result

    # person_id = FindId.person(name)
    # postdoc_array = Array.new
    # postdoc_list = Mentorship.where(:person_id => person_id)
    # postdoc_list.each do |postdoc_single|
    #   single = Api::MentorshipSerializer.new(postdoc_single).serializable_hash
    #   single[:pdStartYear] = postdoc_single.start
    #   single[:pdEndYear] = postdoc_single.end
    #   # wouldn't this line just grab person id instead of person name?
    #   postdoc_array.push(single)
    # end
    # return postdoc_array
    # grab person_id then get person_name from there
    # changed find detail so shouldnt need this i thnk
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
