class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  # creates a new person with the submitted information
  # lower cases the position entered
  # adds a new institution if it doesn't exist
  # only checks to see if the name exists in the database
  # we have not decided how to handle people with same names
  def Person.new_person(name, position, institution_name)
    name = name.downcase
    position = position.downcase
    institution_id = FindId.institution(institution_name)

    person = Person.create_with(position: position,
                                institution_id: institution_id,
                                approved: false)
                    .find_or_create_by(name: name)
    return person
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
