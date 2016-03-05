class Api::AggregatedController < ApiController
  # one question, do I want to check if the user is logged in before action?
  # maybe something like this?
  # before_action(:confirm_logged_in, {:except => [:action1, :action2]})
  respond_to :json
  def index
    @person = Person.all
    render json: {person: @person}
    #render json: {warning: 'not implemented'}, status: 200
  end

  def show
    # here we want to find a person then we want to show the criteria of that person info
    # in the edit page
    Rails.logger.info(params)
    # so first need to find a person and assign the person as a variable
    if Person.exists?(name: params[:name]) # check if the person is in db
      @personInfo = Person.find_person_detail(:name)
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
    # module for submit information
    # so it will first create a person then add relations to it
    Rails.logger.info(params)
    # check if all params to create person 
    if params.has_key?(:name) && params.has_key?(:position) && params.has_key?(:institution)
      # check if the person is not on db
      unless Person.exists?(name: params[:name])
        # person doesn't exist so create a new person
        @person = Person.new_person(params[:name], params[:position], params[:institution])
        # if return value from Person.new from the model is not nil and save works
        if @person != nil && @person.save
          render json: @person.as_json, status: :created
          return
        end
      else # else if person exists in db
        render json: {error: 'the person you have input already exists, please go to edit to edit the person'}
      end
    end
    # is the param check fails, then return an error message
    render json: {error: "please check the all the required parameters"}, status: :bad_request
  end

  def update
  	render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
  	render json: {warning: 'not implemented'}, status: 200
  end

  def notify_admin
    render json: {warning: 'not implemented'}, status: 200
  end
end
