class Api::MentorsController < ApiController
  before_action :set_api_mentor, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_mentors = Api::Mentor.all
    respond_with(@api_mentors)
  end

  def show
    respond_with(@api_mentor)
  end

  def new
    @api_mentor = Api::Mentor.new
    respond_with(@api_mentor)
  end

  def edit
  end

  def create
    @api_mentor = Api::Mentor.new(api_mentor_params)
    @api_mentor.save
    respond_with(@api_mentor)
  end

  def update
    @api_mentor.update(api_mentor_params)
    respond_with(@api_mentor)
  end

  def destroy
    @api_mentor.destroy
    respond_with(@api_mentor)
  end

  private
    def set_api_mentor
      @api_mentor = Api::Mentor.find(params[:id])
    end

    def api_mentor_params
      params.require(:api_mentor).permit(:name, :approved)
    end
end
