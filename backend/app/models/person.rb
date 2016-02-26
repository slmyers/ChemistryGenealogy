class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :postdocs
  has_many :mentors
end
