class Api::AggregatedController < ApiController
  respond_to :json
  def index
    @person = Person.all
    #render json: @person
    render json: {name: @name, position: @position, institution: @institution}
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
    
    if params.has_key?(:@name) && params.has_key?(:@position) && params.has_key?(:@institution)
      # check if the person already exists? The person might exists as a mentor of other maybe
      unless Person.exists?(name: params[:@name])
        @person = Person.new_person(params[:@name], params[:@position], params[:@institution])
        if @person != nil && @person.save
          render json: @person.as_json, status: :created
          return 
        end
      else
        # this is called only when the unless condition statement fails
        # when person already exists then check if the person is posted as mentor of other or as himself
        # if person exists as himsel already then we shouldn't create a new person
        # if person exists as mentor then we add him 
        render json: {error: 'person exists'}, status: :bad_request
      end
    end
  	#render json: {warning: 'not implemented'}, status: 200
  end
|
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
