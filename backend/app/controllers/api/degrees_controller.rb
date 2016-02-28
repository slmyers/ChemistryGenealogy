class Api::DegreesController < ApiController
  before_action :set_api_degree, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_degrees = Api::Degree.all
    respond_with(@api_degrees)
  end

  def show
    respond_with(@api_degree)
  end

  def new
    @api_degree = Api::Degree.new
    respond_with(@api_degree)
  end

  def edit
  end

  def create
    @api_degree = Api::Degree.new(api_degree_params)
    @api_degree.save
    respond_with(@api_degree)
  end

  def update
    @api_degree.update(api_degree_params)
    respond_with(@api_degree)
  end

  def destroy
    @api_degree.destroy
    respond_with(@api_degree)
  end

  private
    def set_api_degree
      @api_degree = Api::Degree.find(params[:id])
    end

    def api_degree_params
      params.require(:api_degree).permit(:year, :approved)
    end
end
