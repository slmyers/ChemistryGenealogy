class Api::NotificationController < ApplicationController
  before_action :authenticate_request!, :is_admin?

  def index
    render json: {warning: 'not implemented'}, status: 200
  end

  def is_admin?
    @admin = Admin.find_by(:user_id => @current_user.id, :approved => true)
    unless @admin.blank?
      return true
    end
    raise NotAuthenticatedError
  end
end
