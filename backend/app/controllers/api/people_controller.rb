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

  def create
    # creating a new user, but do we want to check if user already exists?
    Rails.logger.info(params)
    # check if parameter is there or null
    if params.has_key?(:submitFileObject.name) && params.has_key?(:submitFileObject.currentPositionTitle) && params.has_key?(:submitFileObject.currentInstitutionName)
      unless Person.exists?(:submitFileObject.name) # check if the person already in db
        person = Person.new_person(params[:submitFileObject.name], params[:submitFileObject.currentPositionTitle], params[:submitFileObject.currentInstitutionName])
        if person != nil && person.save
          render json: person.as_json, status: :created
          return
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
