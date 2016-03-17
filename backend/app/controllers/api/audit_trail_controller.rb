class Api::AuditTrailController < ApiController
    include ActionController::Serialization

    respond_to :json

    #index to be removed... only there to view the functionality
    def index
      #get all edits from PaperTrail
      @edits = PaperTrail::Version.order('created_at DESC')
      #make array to properly send all edits to front end
      @prettyEdits = Array.new

      #loop though all edits
      @edits.each do |i|
        #hash for each individual edit
        @edit = Hash.new()
        #use PaperTrailserializer on the changelog string
        @changes = PaperTrail.serializer.load(i.object_changes)

        #if the person model was changed
        if i.item_type=="Person"

          #get appropriate attributes from the version object or serialized object
          @edit[:changes] = @changes
          @edit[:date] = i.created_at
          @edit[:type] = i.item_type
          @edit[:person_id] = i.item_id



        #if the supervisor or mentor model was changed
        else
          #get the original object (in order to obtain the person_id)
          @originalObject = PaperTrail.serializer.load(i.object)

          #get appropriate attributes from the version object or serialized object
          @edit[:changes] = @changes
          @edit[:date] = i.created_at
          @edit[:type] = i.item_type
          @edit[:person_id] = @originalObject["person_id"]
        end

      #finally append the edit to the full array
      @prettyEdits<<@edit
      end

      #render it for the frontend
      render json: {edits:@prettyEdits}

    end



    def show
      #get all edits from PaperTrail
      @edits = PaperTrail::Version.order('created_at DESC')
      #make array to properly send all edits to front end
      @prettyEdits = Array.new

      #loop though all edits
      @edits.each do |i|
        #hash for each individual edit
        @edit = Hash.new()
        #use PaperTrailserializer on the changelog string
        @changes = PaperTrail.serializer.load(i.object_changes)

        #if the person model was changed
        if i.item_type=="Person"

          #get appropriate attributes from the version object or serialized object
          @edit[:changes] = @changes
          @edit[:date] = i.created_at
          @edit[:type] = i.item_type
          @edit[:person_id] = i.item_id



        #if the supervisor or mentor model was changed
        else
          #get the original object (in order to obtain the person_id)
          @originalObject = PaperTrail.serializer.load(i.object)

          #get appropriate attributes from the version object
          @edit[:changes] = @changes
          @edit[:date] = i.created_at
          @edit[:type] = i.item_type
          @edit[:person_id] = @originalObject["person_id"]
        end

      #finally append the edit to the full array
      @prettyEdits<<@edit
      end

      #render it for the frontend
      render json: {edits:@prettyEdits}

    end




end
