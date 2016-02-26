class Institution < ActiveRecord::Base
  has_many :people
  has_many :postdocs 
end
