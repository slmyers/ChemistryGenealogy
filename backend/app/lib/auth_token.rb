# @author Steven Myers
# this class generates the JWT using this gem https://github.com/jwt/ruby-jwt/
class AuthToken
  # Encode a hash in a json web token
  # token stays valid for a month
  def self.encode(payload, ttl_in_minutes = 60 * 24 * 30)
    payload[:exp] = ttl_in_minutes.minutes.from_now.to_i
    # https://github.com/jwt/ruby-jwt/blob/master/lib/jwt.rb#L88
    # can use Rails.application.secrets.secret_key_base as key base
    # but using empty string to reduce dependencies/make deployment easier/
    # ensure it's runnable by other members
    JWT.encode(payload, '')
  end

  # Decode a token and return the payload inside
  # If will throw an error if expired or invalid. See the docs for the JWT gem.
  def self.decode(token, leeway = nil)
    # https://github.com/jwt/ruby-jwt/blob/master/lib/jwt.rb#L97
    decoded = JWT.decode(token, '''', leeway: leeway)
    HashWithIndifferentAccess.new(decoded[0])
  end
end
