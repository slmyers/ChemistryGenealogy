require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe AutoCompleteController, :type => :controller do
  describe "GET #index" do
    it 'should respond to empty name string' do
      get :index, :format => :json, :name => ''
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response).length == 0).to be(false)
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end
    it 'should respond to non-empty name string' do
      get :index, :format => :json, :name => 't'
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response).length == 0).to be(false)
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end

    it 'should respond for empty institution string' do
      get :index, :format => :json, :institution => ''
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response).length == 0).to be(false)
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end

    it 'should respond for non-empty institution string' do
      get :index, :format => :json, :institution => 'un'
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response).length == 0).to be(false)
      expect(response.status).to eq 200
      expect(response.body == assigns(:response).to_json).to be(true)
    end

    it 'should respond with error when no name param and no institution param' do
      get :index, :format => :json
      expect(response.status).to eq 400
    end

    it 'should respond with error when name & institution param' do
      get :index, :fromat => :json, :name => '', :institution => ''
    end
  end
end
