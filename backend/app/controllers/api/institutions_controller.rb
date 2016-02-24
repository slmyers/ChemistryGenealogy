class Api::InstitutionsController < ApplicationController
  before_action :set_api_institution, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_institutions = Api::Institution.all
    respond_with(@api_institutions)
  end

  def show
    respond_with(@api_institution)
  end

  def new
    @api_institution = Api::Institution.new
    respond_with(@api_institution)
  end

  def edit
  end

  def create
    @api_institution = Api::Institution.new(api_institution_params)
    @api_institution.save
    respond_with(@api_institution)
  end

  def update
    @api_institution.update(api_institution_params)
    respond_with(@api_institution)
  end

  def destroy
    @api_institution.destroy
    respond_with(@api_institution)
  end

  private
    def set_api_institution
      @api_institution = Api::Institution.find(params[:id])
    end

    def api_institution_params
      params.require(:api_institution).permit(:name, :approved)
    end
end
