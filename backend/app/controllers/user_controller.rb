class UserController < ApplicationController
  before_action :get_user, except: [:index, :create]
  respond_to :html, :json

  def index
    puts "in index"
    @users = User.all
    puts @users.length
    puts @users[0].as_json
    if @users != nil
      render :json => @users.as_json
    end
  end

  def create
    @user = User.new_user(params[:password], params[:email], params[:first_name], params[:last_name])
    if @user != nil && @user.save
      render json: @user.as_json, status: :created
    else
      # status :no_content is not a descriptive error, but it will trigger an error
      # in the client http request
      render json: {error: 'user exists'}, status: :bad_request
    end
  end

  def show
    respond_with(@user.as_json)
  end

  def update
    if @user.update_attributes(user_params)
      render json: @user.as_json, status: :ok
    else
      render json: {user: @user.errors, status: :unprocessable_entity}
    end
  end

  def destroy
    @user.destroy
    render json: {status: :ok}
  end

  # this code is generated earlier and doens't contribute on the actual web app

  private

  def user_params
    params.fetch(:user, {}).permit(:username, :password, :password_digest)
  end

  def get_user
    @user = User.find(params[:email])
    render json: {status: :not_found} unless @user
  end

end
