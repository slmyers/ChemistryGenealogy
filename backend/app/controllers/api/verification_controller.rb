# @author Steven Myers
# This controller needs administrator token to access.
# it is repsonsible for calling Notifier or Deleter to appropriately
# deal with the information verification story. 
class Api::VerificationController < ApplicationController
  before_action :authenticate_request!, :is_admin?
  respond_to :json

  def index
    render json: {warning: 'not implemented'}, status: 200
  end

  def show
    render json: {warning: 'not implemented'}, status: 200
  end

  def new
    render json: {warning: 'not implemented'}, status: 200
  end

  def edit
    render json: {warning: 'not implemented'}, status: 200
  end

  def create
    render json: {warning: 'not implemented'}, status: 200
  end

  # this is the endpoint for all types of information verification (approval)
  # TODO:should check for multiple parameters
  def update
    if params.has_key?(:user)
      @res = Verifier.verify_user(params[:user])
      render :json => @res.to_json
      return
    elsif params.has_key?(:admin)
      @res = Verifier.verify_admin(params[:admin])
      render :json => @res.to_json
      return
    elsif params.has_key?(:mentorship)
      @res = Verifier.verify_mentorship(params[:mentorship])
      render :json => @res.to_json
      return
    elsif params.has_key?(:supervision)
      @res = Verifier.verify_supervision(params[:supervision])
      render :json => @res.to_json
      return
    elsif params.has_key?(:person)
      @res = Verifier.verify_person(params[:person])
      render :json => @res.to_json
      return
    else
      render json: { errors: ['missing parameter'] }, status: :bad_request
    end
  end

  # this is the endpoint for rejecting new entries into the database
  def destroy
    if params.has_key?(:user)
      @res = Deleter.delete_user(params[:user])
      render :json => @res.to_json
      return
    elsif params.has_key?(:admin)
      @res = Deleter.delete_admin(params[:admin])
      render :json => @res.to_json
      return
    elsif params.has_key?(:mentorship)
      @res = Deleter.delete_mentorship(params[:mentorship])
      render :json => @res.to_json
      return
    elsif params.has_key?(:supervision)
      @res = Deleter.delete_supervision(params[:supervision])
      render :json => @res.to_json
      return
    elsif params.has_key?(:person)
      @res = Deleter.delete_person(params[:person])
      render :json => @res.to_json
      return
    else
      render json: { errors: ['missing parameter'] }, status: :bad_request
    end
  end
end
