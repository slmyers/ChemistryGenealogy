class Api::AggregatedController < ApiController
  respond_to :json
  def index
    @person = Person.all
    #render json: @person
    render json: {person: @person}
    #render json: {warning: 'not implemented'}, status: 200
  end

  def show
    render json: {warning: 'not implemented'}, status: 200
  end

  def new
    render json: {warning: 'not implemented'}, status: 200
  end

  def edit
    render json: {warning: 'not implemented'}, status: 200
  end

  def create
    # called from submitService.js by method:post
    # this is for creating a submit information, not person
    Rails.logger.info(params)
    # no need to check if the params are filled since they will be checked on other api controllers
    # I assume that the credential input from the user is new person, so call people controller method
    # the below if line checks if parameters from frontends are filled.
    if params.has_key?(:@name) && params.has_key?(:@position) && params.has_key?(:@institution)
      unless Person.exists?(name: params[:@name])
        @person = Person.new_person(params[:@name], params[:@position], params[:@institution])
        # check if the degree exists

        if @person != nil && @person.save
          render json: @person.as_json, status: :created
          return 
        end
      else
        # if person exists in table, then update person's variable
        # find that person in the table
        @person = Person.find_by_name(:@name)
        
        #if @degree = Degree.find_by_degree
        #end
        
        #render json: {error: 'person exists'}, status: :bad_request
      end
    end
  	#render json: {warning: 'not implemented'}, status: 200
  end

  def update
  	render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
  	render json: {warning: 'not implementd'}, status: 200
  end

  def submit_information
    render json: {warning: 'not implementd'}, status: 200
  end

  def notify_admin
  end
end
