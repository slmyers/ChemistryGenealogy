class AutoCompleteController < ApplicationController
  def index
    if params.has_key?(:name) && params.has_key?(:institution)
      render json: { errors: ['cannot contain name and institution params'] }, status: :bad_request
    elsif params.has_key?(:name)
      @response = AutoComplete.find_names(params[:name])
      render :json => @response.as_json
    elsif params.has_key?(:institution)
      @response = AutoComplete.find_institutions(params[:institution])
      render :json => @response.to_json
    else
      render json: { errors: ['must contain a name or instituion param'] }, status: :bad_request
    end

  end
end
