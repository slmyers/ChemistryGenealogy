class Postdoc < ActiveRecord::Base
  belongs_to :institution, :class_name => 'Institution'
end
