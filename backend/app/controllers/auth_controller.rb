class AuthController < ApplicationController
  def authenticate
    user = User.find_by_credentials(params[:username], params[:password])
    if user
      render json: authentication_payload(user)
    else
      render json: { errors: ['Invalid email or password'] }, status: :unauthorized
    end
  end

  private

  def authentication_payload(user)
    return nil unless user && user.id
    {
      auth_token: AuthToken.encode({ user_id: user.id }),
      user: { id: user.id, username: user.email } # return whatever user info you need
    }
  end
end
