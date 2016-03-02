class Api::MentorsController < ApiController
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

  def create
    Rails.logger.info(params)
    if params.has_key?(:name)
      # check if the person exists, since person is a mentor
      unless Person.exists(:name)
        # hmm then I can't add to mentor table, I gotta add to people table
        # seems like I could instead just call method from person model or people controller
    #render json: {warning: 'not implemented'}, status: 200
  end

  def update
    render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
    render json: {warning: 'not implemented'}, status: 200
  end
end
