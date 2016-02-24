class Api::SupervisorsController < ApplicationController
  before_action :set_api_supervisor, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_supervisors = Api::Supervisor.all
    respond_with(@api_supervisors)
  end

  def show
    respond_with(@api_supervisor)
  end

  def new
    @api_supervisor = Api::Supervisor.new
    respond_with(@api_supervisor)
  end

  def edit
  end

  def create
    @api_supervisor = Api::Supervisor.new(api_supervisor_params)
    @api_supervisor.save
    respond_with(@api_supervisor)
  end

  def update
    @api_supervisor.update(api_supervisor_params)
    respond_with(@api_supervisor)
  end

  def destroy
    @api_supervisor.destroy
    respond_with(@api_supervisor)
  end

  private
    def set_api_supervisor
      @api_supervisor = Api::Supervisor.find(params[:id])
    end

    def api_supervisor_params
      params.require(:api_supervisor).permit(:name, :approved)
    end
end
