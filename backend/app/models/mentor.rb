class Mentor < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :postdoc, :class_name => 'Postdoc'

  # creates a new mentor
  # for this one, since it should only be called when adding a new mentor
  # when we're in the middle of adding a new postdoc, the parameters should
  # already be found beforehand?
  # probably after a new postdoc is created so that the postdoc_id can be found?
  def Mentor.new_mentor(mentor_name, person_id, postdoc_id, mentor_id)
    return Mentor.new(mentor_name: mentor_name,
                      person_id: person_id,
                      postdoc_id: postdoc_id,
                      mentor_id: mentor_id,
                      approved: false
                      )
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
