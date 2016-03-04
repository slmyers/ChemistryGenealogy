require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe SearchController, :type => :controller do
  describe "GET #index" do
    it 'should assign to response when given name' do
      get :index, :format => :json, :name => 'set all_relations_focal'
      expect(response.status).to eq 200
      expect(assigns(:response)).not_to be_nil
      expect(response.body == assigns(:response).to_json).to be(true)
    end

    it 'should assign to response when given id' do
      get :index, :format => :json, :id => 1
      expect(response.status).to eq 200
      expect(assigns(:response)).not_to be_nil
      expect(response.body == assigns(:response).to_json).to be(true)
    end

    it 'should throw an error without id or name' do
      get :index, :format => :json
      expect(response.status).to eq 400
    end

    it 'should respond with an error if both id and name are params' do
      get :index, :format => :json, :name => 'todd lowary', :id => 1
      expect(response.status).to eq 400
    end
  end
end
