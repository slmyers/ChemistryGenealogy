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
    # here we want to find a person then we want to show the criteria of that person info
    # in the edit page
    Rails.logger.info(params)
    # so first need to find a person and assign the person as a variable
    name = params[:name].downcase
    if Person.exists?(name: name) # check if the person is in db
      person = Person.find_by(name: name)
      render(:json => person.serializer_for_person(person), :status => 200)
      # need to show the personInfo to the frontend
      # do you pass the object as a render json?
    else
      render json: {error: 'the person you are looking for is not in our database, create the person in the submit first'}
    end

    #render json: {warning: 'not implemented'}, status: 200
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
