class Api::DegreesController < ApiController
  respond_to :json

  def index
    render json: {warning: 'not implemented'}, status: 200
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
    Rails.logger.info(params)
    # have to retrieve the array degreeInformation from submitFileObject
    if params.has_key?(:year) && params.has_key?(:degree_type)
      unless Degree.exists?(:degree_type)
        # need to find the way to find institution id so i can pass it as a parameter
    render json: {warning: 'not implemented'}, status: 200
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end
end
