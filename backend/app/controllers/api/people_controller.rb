# temporarily filled out but not used yet (just AggregatedController used)
# will have to figure out how to pass the json parameters to this controller

class Api::PeopleController < ApiController
  respond_to :json

  def index
    render json: {warning: 'not implemented'}, status: 200
  end

  def show
    render json: {warning: 'not implemented'}, status: 200
  end

  def new
    # differences between new and create?
    render json: {warning: 'not implemented'}, status: 200
  end

  def edit
    # differences between edit and update?
    render json: {warning: 'not implemented'}, status: 200
  end

  # creates a new person
  # parameters from JSON: name, position, institution
  # currently assumes that all parameters are not nil
  # only checks if the name exists in the database
  # not sure if we should render as json
  def create
    Rails.logger.info(params)
    # check if all the criterias are filled
    # first I just continue to create iff name, positionl, institution exists
    if params.has_key?(:name) && params.has_key?(:position) && params.has_key?(:institution)
      # check if the person already exists? The person might exists as a mentor of other maybe
      unless Person.exists?(name: params[:name])
        @person = Person.new_person(params[:name], params[:position], params[:institution])
        if @person != nil && @person.save
          render json: @person.as_json, status: :created
          return
        end
      else
        render json: {error: 'person exists'}, status: :bad_request
      end
    end
    #render json: {warning: 'not implemented'}, status: 200
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end
end
