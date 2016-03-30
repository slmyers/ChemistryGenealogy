# @author Steven Myers
# this controller is used when registering a user
class UserController < ApplicationController
  respond_to :json

  #TODO: make less sloppy (joins etc)
  def index
    @admins = Admin.where('approved' => true)
    @user_ids = Array.new
    @admins.each do |a|
      @user_ids.push(a.user_id)
    end
    @users = User.where('approved' => true)
             .where.not('id' => @user_ids)
    render json: @users, status: 200
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
    if params.has_key?(:id)
      if User.exists?('id' => params[:id])
        User.find(params[:id]).destroy
        render json: {user_destroyed: params[:id]}, status: 200
        return
      end
      render json: {user_not_exist: params[:id]}, status: 200
    else
      render json: {error: 'insufficient params'}, status: :bad_request
    end
  end

end
