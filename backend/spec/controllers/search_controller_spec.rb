require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe SearchController, :type => :controller do
  describe "GET #index" do
    it 'should assign to response when given name' do
      get :index, :format => :json, :name => 'TODD lowary'
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response["people"])).not_to be_nil
      expect(assigns(:response["mentors"])).not_to be_nil
      expect(assigns(:response["supervisors"])).not_to be_nil
      expect(assigns(:response["supervised"])).not_to be_nil
      expect(assigns(:response["institutions"])).not_to be_nil
    end

    it 'should assign to response when given id' do
      get :index, :format => :json, :id => 1
      expect(assigns(:response)).not_to be_nil
      expect(assigns(:response["people"])).not_to be_nil
      expect(assigns(:response["mentors"])).not_to be_nil
      expect(assigns(:response["supervisors"])).not_to be_nil
      expect(assigns(:response["supervised"])).not_to be_nil
      expect(assigns(:response["institutions"])).not_to be_nil
    end

    it 'should throw an error without id or name' do
      get :index, :format => :json
      expect(assigns(:response["error"])).not_to eql(nil)
      expect(assigns(:response)).not_to be_nil
    end
  end
end
