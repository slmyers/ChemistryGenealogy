class Mentorship < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :institution, :class_name => 'Institution'

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

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
