require 'set'
# @author Steven Myers
# this class runs a simple like query against the database in order to
# generate autocomplete (typeahead) items for the frontend.
# there is questionable scalability of this class, so it's suggested to
# either debounce or throttle client requests.
class AutoComplete
  def self.find_names(name)
    @name = "%#{name}%".downcase
    @response = Person.where("name LIKE ?", @name).includes(:institution)
    @institutions = Set.new
    return @response
  end

  def self.find_institutions(institution)
    @institution = "%#{institution}%".downcase
    @response = Institution.where("name LIKE ?", @institution)
    return {'institutions' => @response}
  end
end
