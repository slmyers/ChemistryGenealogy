# @author Steven Myers
# this class handles 404 errors, so we don't get a HTML dump in the
# developer console at the frontend. 
class ErrorsController < ApplicationController
  def routing
    render_404
  end
end
