class User < ActiveRecord::Base
  validates :username, :password, :email, :password_digest, presence: true

  def User.find_by_credentials(username, password)
    return User.find_by username: username, password: password
  end

end
