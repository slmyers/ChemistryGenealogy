class ContactUsTicket < ActiveRecord::Base
  validates :email, :title, :desc, presence: true

  
end
