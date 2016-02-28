class AutoCompleteController < ApplicationController
  def index
    if params.has_key?(:name)
      puts
      @response = AutoComplete.find(params[:name])
      render :json => @response.to_json
    else
      render json: { errors: ['must contain name param'] }, status: :bad_request
    end
  end
end
