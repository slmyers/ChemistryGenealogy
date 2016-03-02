# Aggregated controller for control of db tables
class Api::AggregatedController < ApiController
  respond_to :json
	780  
	# editing information won't need a user to track if the information exists
	# We assume the information being edit pre exists
	# degrees, institutions, mentors, postdocs should be editted
	# user informtion such as name should be editted too
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
  	render json: {warning: 'not implemented'}, status: 200
  end

  def update
  	render json: {warning: 'not implemented'}, status: 200
  end

  def destroy
  	render json: {warning: 'not implementd'}, status: 200
  end

  def submit_information
		# First time creating a post
		# check it params degrees and institutions are not present
		if !param[:degrees].present? || !param[:institutions].present?
	  	render json: { errors: ['degrees and institutions are required fields'] }, status: :bad_request
	  	elsif !param[:mentors].present? || !param[:postdocs].present?
	  	# if mentors and postdocs fields are left blank, due to some reasons
	  	# leave it blank until the user edits.
		end
  end

  def notify_admin
		# any information changes to notify admin
		# I think this module is no longer needed but
		# just in case I misunderstood, I'll leave in here
  end
end
