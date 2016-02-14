class User < ActiveRecord::Base
  validates :username, :password, :password_digest, presence: true
  # :password_digest is some type of bcrypt salt??
  PWORD_DIGST = "pword"


  def User.find_by_credentials(username, password)
    return User.find_by username: username, password: password
  end

  def User.new_user(username, password, email)
    unless User.exists?(:username => username)
      return User.new(username: username, password: password, email: email, password_digest: PWORD_DIGST)
    end
  end

  # https://quickleft.com/blog/keeping-your-json-response-lean-in-rails/
  # how to render fields selectively as json
  #def as_json(options={})
  #  super(:only => [:username])
  #end
end
