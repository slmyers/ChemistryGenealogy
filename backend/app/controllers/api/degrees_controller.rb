# temporarily filled out but not used yet (just AggregatedController used)
# will have to figure out how to pass the json parameters to this controller

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

  # this will be called to create a new degree
  # parameters from JSON: year, type, institution
  # will likely need to be called each time a degree needs to be made?
  # *** Will deal with handling the array in this controller later
  # currently assumes that all parameters are not nil
  # not sure if we should render as json
  def create
    Rails.logger.info(params)
    if params.has_key?(:year) && params.has_key?(:type) && params.has_key?(:institution)
      # need to find the institution id first
      instit_id = Institution.find_institution_id(params[:institution])
      # check if the degree exists first
      unless Degree.exists?(year: params[:year], degree_type: params[:type], :institution_id => instit_id)
        @degree = Degree.new_degree(params[:year], params[:type], params[:institution])
        if @degree != nil && @degree.save
          render json: @degree.as_json, status: :created
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
