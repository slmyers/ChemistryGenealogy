class Institution < ActiveRecord::Base
  has_many :people
  has_many :postdocs
  has_many :degrees
end
