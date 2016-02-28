class InformaitonController < ApplicationController
	# editing information won't need a user to track if the information exists
	# We assume the information being edit pre exists
	# degrees, institutions, mentors, postdocs should be editted
	# user informtion such as name should be editted too
	def submit_information
		# First time creating a post
		# check it params degrees and institutions are not present
		if !param[:degrees].present? || !param[:institutions].present?
			render json: { errors: ['degrees and institutions are required fields'] }, status: :bad_request
		elsif !param[:mentors].present? || !param[:postdocs].present?
			# if mentors and postdocs fields are left blank, due to some reasons
			# leave it blank until the user edits.
		
	end

	def edit_information
		# Assume parameters with no value in it will not replace the old params
		if !params.has_key(:degrees)
	end

	def edit_user
		# user should be able to edit their credentials
		# Or do we want to implement this?
	end

	def notify_admin
		# any information changes to notify admin
		# I think this module is no longer needed but
		# just in case I misunderstood, I'll leave in here
	end
end
