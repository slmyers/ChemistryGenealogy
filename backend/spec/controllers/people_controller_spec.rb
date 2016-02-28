require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe Api::PeopleController, :type => :controller do
  describe "GET #index" do
    it 'responds with error if not authenticated' do
      get :index, :format => :json
      expect(response.status).to eq 401
    end

    it 'does not respond with error if authenticated' do
      request.headers['Authorization'] = AuthToken.encode({ user_id: 1 })
      get :index, :format => :json
      expect(response.status).to eq 200
    end
  end
end
