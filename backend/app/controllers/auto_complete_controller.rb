class AutoCompleteController < ApplicationController
  def index
    if params.has_key?(:name)
      puts
      @response = AutoComplete.find(params[:name])
      render :json => @response.to_json
    else
      #error is not rendered properly
      @response = {'error' => 'must use name param', 'status' => 400}
      render :json => @response.to_json
    end
  end
end
