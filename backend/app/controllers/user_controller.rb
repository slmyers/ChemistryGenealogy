# @author Steven Myers
# this controller is used when registering a user
class UserController < ApplicationController
  respond_to :json

  def index
    render json: {warning: 'not implemented'}, status: 200
  end

  # this is the registration endpoint
  # maybe too much logic here
  def create
    Rails.logger.info(params)
    if params.has_key?(:password) && params.has_key?(:email) && params.has_key?(:first_name) && params.has_key?(:last_name)
      unless User.exists?(email: params[:email])
        @user = User.new_user(params[:password], params[:email], params[:first_name], params[:last_name])
        if @user != nil && @user.save
          render json: @user.as_json, status: :created
          return
        end
      else
        render json: {error: 'user exists'}, status: :bad_request
      end
    end
    render json: {error: 'insufficient params'}, status: :bad_request
  end

  def show
    render json: {warning: 'not implemented'}, status: 200
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end

end
