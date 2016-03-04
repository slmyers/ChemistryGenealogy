class Api::AggregatedController < ApiController
  respond_to :json
  def index
    @person = Person.all
    #render json: @person
    render json: {person: @person}
    #render json: {warning: 'not implemented'}, status: 200
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
    # called from submitService.js by method:post
    # this is for creating a submit information, not person
    Rails.logger.info(params)
    # no need to check if the params are filled since they will be checked on other api controllers
    # I assume that the credential input from the user is new person, so call people controller method
    # the below if line checks if parameters from frontends are filled.
    if params.has_key?(:@name) && params.has_key?(:@position) && params.has_key?(:@institution)
      unless Person.exists?(name: params[:@name])

        # check if the degree exists
        
        if params.has_key(:@degree)

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

        # check if the postdoc exists

        if params.has_key(:@postdoc)

          if params.has_key?(:start_year) && params.has_key?(:supervisor) && params.has_key?(:institution)
            # if params there then create if not new
            name_id = Person.find_person_id(params[:name])

            # need to assign 
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

        # since params instituion and position is there, I need to check whether they exists or not

        # check instituion if new then create
        # if not new then move over
        unless Institution.exists?(name: params[:institution])
          @institution = Institution.new_institution(params[:institution])
          if @institution != nil && @institution.save
            render json: @institution.as_json, status: :created
            return
          end
        end 

        @person = Person.new_person(params[:@name], params[:@position], params[:@institution])
        if @person != nil && @person.save
          render json: @person.as_json, status: :created
          return 
        end

      else
        # if person exists in table, then update person's variable
        # find that person in the table
        render json: {error: 'person exists'}, status: :bad_request
      end
    end
  	#render json: {warning: 'not implemented'}, status: 200
  end

  def update
  	render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
  	render json: {warning: 'not implementd'}, status: 200
  end

  def submit_information
    render json: {warning: 'not implementd'}, status: 200
  end

  def notify_admin
  end
end
