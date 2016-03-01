class Person < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
  has_many :mentorships
  has_many :supervisions

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
