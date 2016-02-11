class User < ActiveRecord::Base
  validates :username, :password, :password_digest, presence: true
end
