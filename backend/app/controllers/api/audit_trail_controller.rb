class Api::AuditTrailController < ApiController
    include ActionController::Serialization

    respond_to :json

    def index
      @versions = PaperTrail::Version.order('created_at DESC')
      render json: {versions: @versions}
    end

    def show

        render json: {error: 'the person you are looking for is not in our database, create the person in the submit first'}


      #render json: {warning: 'not implemented'}, status: 200
    end





end
