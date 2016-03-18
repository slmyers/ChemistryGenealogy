class Api::AggregatedController < ApiController

  include ActionController::Serialization
  # one question, do I want to check if the user is logged in before action?
  # maybe something like this?
  # before_action(:confirm_logged_in, {:except => [:action1, :action2]})
  respond_to :json
  def index
    render json: {degree: params[:degree], person_name: params[:name]}
    #@person = Person.all
    #render json: {person: @person}
    #render json: {warning: 'not implemented'}, status: 200
  end

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

  def create
    @person = Person.submit_handling(params[:name], params[:position], params[:institution], params[:postdoc], params[:degree])
    if @person != nil && @person.save
      render json: {person: @person}
    else
      render json: {warning: "didnt work"}
    end
  end

  def update
    # this module will get called for edit information
    # right now I assume the parametere being sent to backend are same as for sucmit information
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

  # Used to test returning serialized person object to the frontend
  def test
    person = Person.find(2)
    render(:json => person.serializer_for_person(person), :status => 200)
  end

end
