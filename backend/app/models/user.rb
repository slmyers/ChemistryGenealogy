class User < ActiveRecord::Base
  has_many :admin

  validates :email, :password, :password_digest, presence: true
  # :password_digest is some type of bcrypt salt??
  PWORD_DIGST = "pword"


  def User.find_by_credentials(email, password)
    return User.find_by email: email, password: password
  end

  def User.new_user(password, email, first_name, last_name)
    unless User.exists?(:email => email)
      return User.new(password: password, email: email, password_digest: PWORD_DIGST,
                      first_name: first_name, last_name: last_name, approved: false)
    end
  end

  def as_json(options={})
    super(:except => [:created_at, :updated_at])
  end
end
