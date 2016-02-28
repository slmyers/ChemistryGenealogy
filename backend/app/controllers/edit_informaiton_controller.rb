class EditInformaitonController < ApplicationController
	# editing information won't need a user to track if the information exists
	# We assume the information being edit pre exists
	# degrees, institutions, mentors, people, postdocs should be editted
	# user informtion such as name should be editted too
	def edit_information
		# information changes on post, i.e. degree, institution, etc
		# need to check all parameters
		# not there at all, there but nil, there but false value(how to tell?)
		# and there but an empty string

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
