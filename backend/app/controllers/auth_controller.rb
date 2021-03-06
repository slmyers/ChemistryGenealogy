# @author Steven Myers
# This class has authentication methods that will generate a JWT for the
# client to hold 
class AuthController < ApplicationController

  def authenticate
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      render json: authentication_payload(user)
    else
      render json: { errors: ['Invalid email or password'] }, status: :unauthorized
    end
  end

  private

  def authentication_payload(user)
    return nil unless user && user.id
    admin = Admin.find_by(:user_id => user.id, :approved => true)
    if admin.blank?
      return {
                auth_token: AuthToken.encode({ user_id: user.id }),
                user: { id: user.id, email: user.email },
                admin: false
              }
    else
      return {
                auth_token: AuthToken.encode({ user_id: user.id }),
                user: { id: user.id, email: user.email },
                admin: true
              }
    end
  end
end
