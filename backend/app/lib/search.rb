# i'm just going to run sequential active record find_by queries
# this is a naive approach?
class Search

  # search the data model for a name and return their information found in the
  # people, postdoc and degree information
  def by_name(name)
    # check to see if a name is found in people, supervisor or mentor
    @person = Person.find_by name: name
    @supervisor = Supervisor.find_by name: name
    @mentor = Mentor.find_by name: name

    # find the institution where the person is employed
    unless @person.blank?
      @person_institution = Institution.find(@person.institution_id)
    end

    # find the postdoc information
    unless @person.blank?
      @person_mentor = Mentor.find(@person.id)
      unless @person_mentor.blank?
        @postdoc = Postdoc.find(@person_mentor.postdoc)
        @postdoc_institution = Institution.find(@postdoc.institution_id)
      end
    end

  end

  # builds a hash containing the postdoc information
  def postdoc_by_id(person_id)
    @person_mentor = Mentor.find(person_id)
    unless @person_mentor.blank?
      @postdoc = Postdoc.find(@person_mentor.postdoc)
      unless @postdoc.blank?
        @postdoc_institution = Institution.find(@postdoc.institution_id)
        unless @postdoc_institution.blank?
          return {
                    :mentor => @person_mentor,
                    :postdoc => @postdoc,
                    :institution => @postdoc_institution
                  }
        end
        return {
                  :mentor => @person_mentor,
                  :postdoc => @postdoc
                }
      end
      return {:mentor => @person_mentor}
    end
    return {}
  end
end
