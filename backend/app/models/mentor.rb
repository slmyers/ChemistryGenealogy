class Mentor < ActiveRecord::Base
  belongs_to :person, :class_name => 'Person'
  belongs_to :mentor, :class_name => 'Person'
  belongs_to :postdoc, :class_name => 'Postdoc'

end
