class ApplicationController < ActionController::API
  include ActionController::Serialization
  render(:json => json_object, :status => 200)
end