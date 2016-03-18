class AdminController < ApplicationController
  before_action :authenticate_admin!


  def authenticate_admin!
    User.where(:id => @current_user.id)
        .joins(:admin)



  end
end
