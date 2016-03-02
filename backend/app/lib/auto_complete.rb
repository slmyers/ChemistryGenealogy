require 'set'
class AutoComplete
  #keeping naming to maintain test integrity and UML
  #will change after sprint
  #TODO: change find -> find_names
  def self.find(name)
    @name = "%#{name}%".downcase
    @response = Person.where("name LIKE ?", @name).includes(:institution)
    @institutions = Set.new
    @response.each do |p|
      unless p.institution.blank? then @institutions.add(p.institution) end
    end

    return {'people' => @response, 'institutions' => @institutions}
  end

  #TODO: implement method to autocomplete institutions
  def self.find_institutions(institution)

  end
end
