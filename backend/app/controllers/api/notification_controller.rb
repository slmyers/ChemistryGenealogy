class Api::NotificationController < ApplicationController
  before_action :authenticate_request!, :is_admin?

  def index
    @response = Notifier.all_notifications
    render :json => @response.to_json
  end
end
