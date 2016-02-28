require 'rails_helper'

RSpec.configure do |config|
  config.render_views = true
end

describe AutoCompleteController, :type => :controller do
  describe "GET #index" do
    it 'should respond to empty string' do
      get :index, :format => :json, :name => ''
      expect(assigns(:response)).not_to be_nil
    end
    it 'should respond to non-empty string' do
      get :index, :format => :json, :name => 't'
      expect(assigns(:response)).not_to be_nil
    end
    it 'should respond with error when no name param' do
      get :index, :format => :json
      expect(assigns(:response["error"])).not_to eql(nil)
      expect(assigns(:response)).not_to be_nil
    end
  end
end
