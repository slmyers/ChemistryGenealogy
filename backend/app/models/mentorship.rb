class Mentorship < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :institution, :class_name => 'Institution'

  # creates a new mentorship
  # creates a new person if the person does not exist or the mentor does not
  # exist for any reason
  def Mentorship.new_mentorship(person_name, mentor_name, institution_name, start_date, end_date)
    person_id = Person.find_person_id(person_name)
    mentor_id = Person.find_mentor_supervisor_id(mentor_name, institution_name)
    institution_id = Institution.find_institution_id(institution_name)
    unless Mentorship.exists?(:person_id => person_id,
                              :mentor_id => mentor_id,
                              :institution_id => institution_id,
                              :start => start_date,
                              :end => end_date)
      return Mentorship.new(person_id: person_id,
                        mentor_id: mentor_id,
                        institution_id: institution_id,
                        start: start_date,
                        end: end_date,
                        approved: false)
    end
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
