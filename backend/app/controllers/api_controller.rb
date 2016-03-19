# @author Steven Myers
# will authenticate every request besides GETs for everything
# inheriting from the ApiController
class ApiController < ApplicationController
  before_action :authenticate_request!, except: [:index, :show]
end
