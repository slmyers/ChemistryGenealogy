
require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

# we can extrapolate the authentication behavior for all Api sub classes
# from one subclass

describe Api::PeopleController, :type => :controller do
  describe "GET #index" do
    it 'does not respond with error if not authenticated' do
      get :index, :format => :json
      expect(response.status).to eq 200
    end
  end

  describe "POST #create" do
    it 'does not respond with error if authenticated' do
      request.headers['Authorization'] = AuthToken.encode({ user_id: 1 })
      post :create, :format => :json
      expect(response.status).to eq 200
    end

    it 'does respond with error if not authenticated' do
      post :create, :format => :json
      expect(response.status).to eq 401
    end
  end
end
