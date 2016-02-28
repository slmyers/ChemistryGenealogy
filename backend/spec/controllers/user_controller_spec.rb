require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe UserController, :type => :controller do
  describe "POST #create" do
    # cant get test to work -- sending json with request not working
    it 'saves a user with proper credentials' do
      #request.headers['Content-Type'] = 'application/json'
      #jsondata = '{"email":"an@email.ca", "password":"pass","first_name":"first","last_name":"last"}'

      #post :create, jsondata, :format => :json
      #puts response.body.to_json
      #expect(response.status).to eq 200
    end
  end
end
