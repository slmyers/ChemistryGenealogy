class Postdoc < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'

  # creates a new postdoc
  def Postdoc.new_postdoc(start_date, end_date, institution_name)
    institution_id = Institution.find_id(institution_name)
    return Postdoc.new(start: start_date,
                      end: end_date,
                      institution_id: institution_id,
                      approved: false
                      )
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
