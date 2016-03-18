# Main controller for handling submit and edit information
class Api::AggregatedController < ApiController

  include ActionController::Serialization
  respond_to :json

  # Handles showing the degree and person name parameters with GET
  # (Need to double-check this)
  def index
    render json: {degree: params[:degree], person_name: params[:name]}
  end

  # Retrieves a person's information with GET to the frontend
  # @note Currently uses search method to get information
  def show
# <<<<<<< HEAD
#     Rails.logger.info(params)
#     # First, we need to find a person and assign the person as a variable
#     name = params[:name].downcase
#     if Person.exists?(name: name) # Check if the person is in db
#       person = Person.find_by(name: name)
#       render(:json => person.serializer_for_person(person), :status => 200)
#     else
#       render json: {error: 'the person you are looking for is not in our database, create the person in the submit first'}
#     end
# =======
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
    @person = Person.submit_handling(params[:name], params[:position], params[:institution], params[:postdoc], params[:degree])
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
    @person = Person.update_handling(params[:id], params[:name], params[:position], params[:institution], params[:postdoc], params[:degree])
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
