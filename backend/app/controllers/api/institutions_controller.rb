# temporarily filled out but not used yet (just AggregatedController used)
# will have to figure out how to pass the json parameters to this controller

class Api::InstitutionsController < ApiController
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

  # creates a new institution
  # parameters from JSON: institution
  # shouldn't have an error if it doesn't exist
  # not sure if we should render as json
  def create
    Rails.logger.info(params)
    if params.has_key?(:institution)
      unless Institution.exists?(name: params[:institution])
        @institution = Institution.new_institution(params[:institution])
        if @institution != nil && @institution.save
          render json: @institution.as_json, status: :created
          return
        end
      end
    end
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end
end
