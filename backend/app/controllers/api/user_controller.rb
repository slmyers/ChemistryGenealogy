class Api::UserController < ApplicationController
  before_action :get_user, except: [:index, :create]
  respond_to :html, :json

  def index
    @user = User.all
    respond_with(@users) do |format|
      format.json { render :json => @user.as_json }
      format.html
    end
  end

  def create
    @user = User.new_user(params[:username], params[:password], params[:email])
    if @user != nil
      render json: @user.as_json, status: :created
    else
      # status :no_content is not a descriptive error, but it will trigger an error
      # in the client http request
      render json: {error: 'user exists'}, status: :bad_request
    end
    #@user = User.new(username: params[:username], password: params[:password], email: params[:email], password_digest:'pword')
    #puts @user.as_json
    #if @user.save
    #  render json: @user.as_json, status: :ok
    #else
    #  render json: {user: @user.errors, status: :no_content}
    #end
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

  private

  def user_params
    params.fetch(:user, {}).permit(:username, :password, :password_digest)
  end

  def get_user
    @user = User.find(params[:username])
    render json: {status: :not_found} unless @user
  end

end
