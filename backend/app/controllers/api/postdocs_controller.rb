class Api::PostdocsController < ApiController
  before_action :set_api_postdoc, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_postdocs = Api::Postdoc.all
    respond_with(@api_postdocs)
  end

  def show
    respond_with(@api_postdoc)
  end

  def new
    @api_postdoc = Api::Postdoc.new
    respond_with(@api_postdoc)
  end

  def edit
  end

  def create
    @api_postdoc = Api::Postdoc.new(api_postdoc_params)
    @api_postdoc.save
    respond_with(@api_postdoc)
  end

  def update
    @api_postdoc.update(api_postdoc_params)
    respond_with(@api_postdoc)
  end

  def destroy
    @api_postdoc.destroy
    respond_with(@api_postdoc)
  end

  private
    def set_api_postdoc
      @api_postdoc = Api::Postdoc.find(params[:id])
    end

    def api_postdoc_params
      params.require(:api_postdoc).permit(:start, :end, :approved)
    end
end
