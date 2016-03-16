class ApiController < ApplicationController
  before_action :authenticate_request!, except: [:index, :show]
end
