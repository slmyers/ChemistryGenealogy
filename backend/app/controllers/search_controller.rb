class SearchController < ApplicationController
  def index
    if params.has_key?(:name) && params.has_key?(:id)
      render json: { errors: ['query can not contain both id and name param'] }, status: :bad_request
    elsif params.has_key?(:name)
      @response = Search.relations_by_name(params[:name].downcase)
      Rails.logger.info(@response.as_json)
      render :json => @response.to_json
    elsif params.has_key?(:id)
      @response = Search.relations_by_id(params[:id])
      render :json => @response.to_json
    else
      render json: { errors: ['must use name or id param'] }, status: :bad_request
    end
  end
end
