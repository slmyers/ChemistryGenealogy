class Api::PeopleController < ApplicationController
  before_action :set_api_person, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @api_people = Api::Person.all
    respond_with(@api_people)
  end

  def show
    respond_with(@api_person)
  end

  def new
    @api_person = Api::Person.new
    respond_with(@api_person)
  end

  def edit
  end

  def create
    @api_person = Api::Person.new(api_person_params)
    @api_person.save
    respond_with(@api_person)
  end

  def update
    @api_person.update(api_person_params)
    respond_with(@api_person)
  end

  def destroy
    @api_person.destroy
    respond_with(@api_person)
  end

  private
    def set_api_person
      @api_person = Api::Person.find(params[:id])
    end

    def api_person_params
      params.require(:api_person).permit(:name, :position, :approved)
    end
end
