require 'set'
class AutoComplete
  def self.find(name)
    @name = "%#{name}%".downcase
    @response = Person.where("name LIKE ?", @name).includes(:institution)
    @institutions = Set.new
    @response.each do |p|
      unless p.institution.blank? then @institutions.add(p.institution) end
    end

    return {'people' => @response, 'institutions' => @institutions}
  end
end
