# Main controller for handling submit and edit information
class Api::AggregatedController < ApiController

  include ActionController::Serialization
  respond_to :json

  # Handles showing the degree and person name parameters with GET
  # (Need to double-check this)
  def index
    render json: {degree: params[:degree], person_name: params[:name]}
  end

  # Retrives a person's information with GET to the frontend
  # @note currently uses the search module to get the information
  def show
    if params.has_key?(:id)
      @person = Search.person(params[:id])
      render :json => @person.to_json
    elsif
      render json: {warning: 'expected id param'}, status: 200
    end

  end

  def new
    render json: {warning: 'not implemented'}, status: 200
  end

  def edit
    render json: {warning: 'not implemented'}, status: 200
  end

  # Handles submitting information about a person with POST
  def create
    Rails.logger.info(params)
    @person = Information.submit_handling(params[:name], params[:position], params[:institution], params[:postdoc], params[:degree])
    if @person != nil && @person.save
      render json: {person: @person}
    else
      render json: {warning: "didnt work"}
    end
  end

  # Handles updating a person's information with PUT
  # Haven't tried this yet!!!
  def update
    Rails.logger.info(params)
    @person = Information.update_handling(params[:id], params[:name], params[:position], params[:institution], params[:postdoc], params[:degree])
    if @person != nil && @person.save
      render json: {person: @person}
    else
      render json: {warning: "didnt work"}
    end
  end

  def destroy
  	render json: {warning: 'not implemented'}, status: 200
  end

  def notify_admin
    render json: {warning: 'not implemented'}, status: 200
  end

end
