class AdminsController < ApplicationController
  def index
    @admins = Admin.where('approved' => true)
              .includes(:user)

    @response_array = Array.new
    @admins.each do |a|
      @response_hash = {
        'data' => a,
        'user' => a.user
      }
      @response_array.push(@response_hash)
    end
    render json: @response_array.to_json, status: 200
  end

  def create
    if params.has_key?(:user_id)
      if User.exists?('id' => params[:user_id])
        @admin = Admin.create(user_id: params[:user_id], approved: true)
        render json: {created_admin: @admin}, status: 200
        return
      end
      render json: {error: 'user does not exist'}, status:  :bad_request
      return
    end
    render json: {error: 'user does not exist'}, status: :bad_request
  end
end
