class SearchController < ApplicationController
  def index
    if params.has_key?(:name)
      @response = Search.relations_by_name(params[:name].downcase)
      render :json => @response.to_json
    elsif params.has_key?(:id)
      @response = Search.relations_by_id(params[:id])
      render :json => @response.to_json
    else
      #error is not rendered properly
      @response = {'error' => 'must use name or id param', 'status' => 400}
      render :json => @response.to_json
    end
  end
end
