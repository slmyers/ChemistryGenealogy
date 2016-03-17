class Api::AuditTrailController < ApiController
    include ActionController::Serialization

    respond_to :json

    def index
      @versions = PaperTrail::Version.order('created_at DESC')
      @prettyVersions = @versions.select('id,item_type, item_id, object_changes')

      #@versions = @versios.find(0)
      render json: {versions:@prettyVersions}

    end

    def show
      @versions = PaperTrail::Version.order('created_at DESC')
      @prettyVersions = @versions
      #@versions = @versios.find(0)
      render json: {versions:@versions}
    end

    def history
      @versions = PaperTrail::Version.order('created_at DESC')
      @prettyVersions = @versions
      #@versions = @versios.find(0)
      render json: {versions:@versions}
    end


end
