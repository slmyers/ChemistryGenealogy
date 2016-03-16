# temporarily filled out but not used yet (just AggregatedController used)
# will have to figure out how to pass the json parameters to this controller

class Api::SupervisionsController < ApiController
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

  # creates a new supervisions relationship
  # parameters from JSON: year, type, institution, supervisor, name
  # currently assumes that all parameters are not nil
  # there are a lot of redundancies with the model that can be removed later
  # not sure if we should render as json
  def create
    Rails.logger.info(params)
    if params.has_key?(:year) && params.has_key(:type) && params.has_key(:institution) && params.has_key(:supervisor) && params.has_key(:name)
      # need to find the degree, person, and supervisor IDs first
      degree_id = Degree.find_degree_id(params[:year], params[:type], params[:institution])
      name_id = Person.find_person_id(params[:name])
      supervisor_id = Person.find_mentor_supervisor_id(params[:supervisor], params[:institution])
      # check if the supervisor relationship already exists
      unless Supervision.exists?(:degree_id => degree_id, :person_id => name_id, :supervisor_id => supervisor_id)
        @supervision = Supervision.new_degree(params[:year], params[:type], params[:institution], params[:name], params[:supervisor])
        if @supervision != nil && @supervision.save
          render json: @supervision.as_json, status: :created
          return
        end
      end
        # hmm then I can't add to mentor table, I gotta add to people table
        # seems like I could instead just call method from person model or people controller
    #render json: {warning: 'not implemented'}, status: 200
    # i don't understand how many times you guys can not close your if statments -- steve
    end
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end
end
