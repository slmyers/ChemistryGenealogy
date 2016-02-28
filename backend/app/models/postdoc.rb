class Postdoc < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
