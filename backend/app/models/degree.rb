class Degree < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :supervisors
end
