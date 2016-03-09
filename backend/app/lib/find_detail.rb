class FindDetail

  # finds and returns the details of a person
  # returns nil if the person does not exist in the database
  # returns an array in the format of [person, [postdocs], [degrees]]
  # if the person does not have any postdocs or degrees, this returns nil
  def self.person(name)
    if Person.exists?(name: name)
      name = name.downcase

      # find the person in the database and extracts details from it
      # currently not using position and institution_id for anything
      # will remove those lines if we really don't need to extract them
      person_id = FindId.person(name)
      person_object = Person.find(person_id)
      position = person_object.position
      unless person_object.institution_id.nil?
        institution_object = Institution.find(person_object.institution_id)
        institution_name = institution_object.name
      end

      # make an array of postdocs that are connected to the person in json
      # need to check what happens when empty array
      postdoc_array = Array.new
      postdoc_list = Mentorship.where(:person_id => person_id)
      postdoc_list.each do |postdoc_single|
        postdoc_array.push(postdoc_single.as_json)
      end

      # make arrays of degrees and supervisions that are connected to the person
      degree_id_array = Array.new
      degree_array = Array.new
      supervision_array = Array.new

      # this returns an array of supervisions with the same person_id
      supervision_find = Supervision.where(:person_id => person_id)

      # extracts an array of degree_ids that connect to the person_id
      # adds each supervision to supervision_array in json format
      supervision_find.each do |supervision_single|
        unless degree_id_array.include? supervision_single.degree_id
          degree_id_array.push(supervision_single.degree_id)
          supervision_array.push(supervision_single.as_json)
        end
      end

      # extracts an array of degrees from all ids found in the degree_id_array
      # in json format
      degree_id_array.each do |degree_single_id|
        degree = Degree.find(degree_single_id)
        degree_array.push(degree.as_json)
      end

      return {person: person_object.as_json,
              postdoc: postdoc_array,
              degree: degree_array,
              degree_supervision: supervision_array}
    end
  end
end
