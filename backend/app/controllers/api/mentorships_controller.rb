# temporarily filled out but not used yet (just AggregatedController used)
# will have to figure out how to pass the json parameters to this controller

class Api::MentorshipsController < ApiController
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

  # creates a new mentorship relationship
  # paramters from JSON: name, pdSupervisor, pdInstitution, pdStartYear, pdEndYear
  # currently assumes that all parameters are not nil
  # not sure if we should render as json
  def create
    Rails.logger.info(params)
    if params.has_key?(:name) && params.has_key?(:pdSupervisor) && params.has_key?(:pdInstitution) && params.has_key?(:pdStartYear) && params.has_key(:pdEndYear)
      # need to find the person, supervisor, and institution IDs first
      name_id = Person.find_person_id(params[:name])
      supervisor_id = Person.find_mentor_supervisor_id(params[:pdSupervisor], params[:pdInstitution])
      instit_id = Institution.find_institution_id(params[:pdInstitution])
      # check if the mentorship already exists
      unless Mentorship.exists?(:person_id => name_id, :mentor_id => supervisor_id, :institution_id => instit_id, :start => params[:pdStartYear], :end => params[:pdEndYear])
        @mentorship = Mentorship.new_degree(params[:name], params[:pdSupervisor], params[:pdInstitution], params[:pdStartYear], params[:pdEndYear])
        if @mentorship != nil && @mentorship.save
          render json: @mentorship.as_json, status: :created
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
