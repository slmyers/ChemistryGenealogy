class Api::ContactUsTicketController < ApplicationController
  respond_to :html, :json

  def index
    @contact_us_ticket = ContactUsTicket.all
    respond_with(@contact_us_ticket) do |format|
      format.json { render :json => @contact_us_ticket.as_json }
      format.html
    end
  end

  def create
    @contact_us_ticket = ContactUsTicket.new(user_params)
    if @contact_us_ticket.save
      render json: @contact_us_ticket.as_json, status: :ok
    else
      render json: {contact_us_ticket: @contact_us_ticket.errors, status: :no_content}
    end
  end

  def show
    respond_with(@contact_us_ticket.as_json)
  end

  private

  def contact_us_ticket_params
    params.fetch(:contact_us_ticket, {}).permit(:email, :title, :desc)
  end

end
