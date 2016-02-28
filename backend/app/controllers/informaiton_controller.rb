class InformaitonController < ApplicationController
	# editing information won't need a user to track if the information exists
	# We assume the information being edit pre exists
	# degrees, institutions, mentors, people, postdocs should be editted
	# user informtion such as name should be editted too
	def submit_information
	end

	def edit_information
		# Assume parameters with no value in it will not replace the old params
		if !params.has_key(:degree)
	end

	def edit_user
		# user should be able to edit their credentials
	end

	def notify_admin
		# any information changes to notify admin
		# I think this module is no longer needed but
		# just in case I misunderstood, I'll leave in here
	end
end
