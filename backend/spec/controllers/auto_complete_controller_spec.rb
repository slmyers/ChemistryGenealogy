require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe AutoCompleteController, :type => :controller do
  describe "GET #index" do
    it 'should respond to empty string' do
      get :index, :format => :json, :name => ''
      expect(assigns(:response)).not_to be_nil
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end
    it 'should respond to non-empty string' do
      get :index, :format => :json, :name => 't'
      expect(assigns(:response)).not_to be_nil
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end
    it 'should respond with error when no name param' do
      get :index, :format => :json
      expect(response.status).to eq 400
    end
  end
end
