class SearchController < ApplicationController

  def index
    @search_type = params[:type]
    case @search_type
    when 'person'
      call_person(params[:person])
    else
      puts 'not found'
    end
  end

  private

  def call_person(person)
    puts person
  end

end
