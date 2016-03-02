class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :postdocs
  has_many :mentors
  has_many :supervisors

  # creates a new person with the submitted information
  # adds a new institution if it doesn't exist (not sure if this is supposed to be in controller?)
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    institution_id = Institution.find_id(institution_name)
    return Person.new(name: name,
                      position: position,
                      institution_id: institution_id,
                      approved: false
                      )
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
