class Institution < ActiveRecord::Base
  has_many :people
  has_many :degrees

  def as_json(options={})
    super(:except => [:created_at, :updated_at, :approved])
  end
end
