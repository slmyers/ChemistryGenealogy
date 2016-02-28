class AutoComplete
  def self.find(name)
    @name = "%#{name}%".downcase
    @response = Person.where("name LIKE ?", @name)
    @institutions = Search.get_institutions(@response)
    return {'people' => @response, 'institutions' => @institutions}
  end
end
