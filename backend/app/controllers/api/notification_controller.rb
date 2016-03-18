# @author Steven Myers
# this is the notification endpoint. It will call the Notifier to gather and
# bundle all unapproved entries in the database, and deliver them to the
# frontend.
class Api::NotificationController < ApplicationController
  before_action :authenticate_request!, :is_admin?

  def index
    @response = Notifier.all_notifications
    render :json => @response.to_json
  end
end
