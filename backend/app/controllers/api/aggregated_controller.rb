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
    # # module for submit information
    # # so it will first create a person then add relations to it
    # Rails.logger.info(params)
    # # check if all params to create person
    # if params.has_key?(:name) && params.has_key?(:position) && params.has_key?(:institution)
    #   # check if the person is not on db
    #   unless Person.exists?(name: params[:name])
    #     # person doesn't exist so create a new person
    #     @person = Person.new_person(params[:name], params[:position], params[:institution])
    #     # if return value from Person.new from the model is not nil and save works
    #     if @person != nil && @person.save
    #       render json: @person.as_json, status: :created
    #       return
    #     end
    #   else # else if person exists in db
    #     render json: {error: 'the person you have input already exists, please go to edit to edit the person'}
    #   end
    # end
    # # is the param check fails, then return an error message
    #render json: {error: "please check the all the required parameters"}, status: :bad_request
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
    # first check if the person exists
    # if Person.exists?(name: params[:name])
    #   # then call check module in model to check what the user wants to change
    #
    #   @personInfo = Person.find_person_detail
    #   if @personInfo.position != params[:postion]
    #   @person = Person.check_criteria(params[:name], params[:position], params[:institution])
    #   end
    #
    # else
    #   render json: {error: "The information you are looking for does not exists"}
    end

  	#render json: {warning: 'not implemented'}, status: 200
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
    #render(:json => Person.all, :status =>200)
  end

end
