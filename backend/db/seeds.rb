# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!([
  {
    password: 'testPassword', email: 'testEmail@email.ca', password_digest: 'pword',
    first_name: 'first', last_name: 'last', approved: true
  },
  {
    password: 'admin', email: 'tlowary@ualberta.ca', password_digest: 'pword',
    first_name: 'todd', last_name: 'lowary', approved: true
  }
])

# add Todd Lowary as an admin
Admin.create!([
  {user_id: 2, approved: true}
])

Institution.create!([
  {name: 'university of alberta', approved: true},
  {name: 'carlsberg laboratory', approved: true},
  {name: 'university of arkansas', approved: true},
  {name: 'johns hopkins university', approved: true},
  {name: 'university of california, berkeley', approved: true},
  {name: 'nottingham university', approved: true},
  {name: 'national research council of canada', approved: true}
])

Person.create!([
  {name: 'todd lowary', position: 'professor', institution_id: 1, approved: true},
  {name: 'wei shi', position: 'assistant professor', institution_id: 3, approved: true},
  {name: 'ole hindsgaul', position: 'professor emeritus', institution_id: 1, approved: true},
  {name: 'david bundle', position: 'professor emeritus', institution_id: 1, approved: true}
])

Degree.create!([
  {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 2008, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1980, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1971, institution_id: 6, degree_type: 'phd', approved: true}
])

Supervisor.create!([
  {approved: true, degree_id: 1, person_id: 1, supervisor_id: 3, supervisor_name: 'ole hindsgaul'},
  {approved: true, degree_id: 2, person_id: 2, supervisor_id: 1, supervisor_name: 'todd lowary'},
  {approved: true, degree_id: 3, person_id: 3, supervisor_id: nil, supervisor_name: 'raymond u. lemieux'},
  {approved: true, degree_id: 4, person_id: 4, supervisor_id: nil, supervisor_name: 'james baddiley'}
])

# Postdoctoral Appointment

# 1973-1975, Raymond U. Lemieux, University of Alberta


Postdoc.create!([
  {start: 1993, end: 1995, institution_id: 1, approved: true},
  {start: 1996, end: 1996, institution_id: 2, approved: true},
  {start: 2008, end: 2012, institution_id: 4, approved: true},
  {start: 1980, end: 1981, institution_id: 5, approved: true},
  {start: 1971, end: 1973, institution_id: 7, approved: true},
  {start: 1973, end: 1975, institution_id: 1, approved: true}
])

Mentor.create!([
  {person_id: 1, postdoc_id: 1, mentor_id: 4, mentor_name: 'david bundle', approved: true},
  {person_id: 1, postdoc_id: 2, mentor_id: nil, mentor_name: 'morten meldel', approved: true},
  {person_id: 2, postdoc_id: 3, mentor_id: nil, mentor_name: 'jun liu', approved: true},
  {person_id: 3, postdoc_id: 4, mentor_id: nil, mentor_name: 'clinton e. ballou', approved: true},
  {person_id: 4, postdoc_id: 5, mentor_id: nil, mentor_name: 'harold j. jennings', approved: true},
  {person_id: 4, postdoc_id: 6, mentor_id: nil, mentor_name: 'raymond u. lemieux', approved: true}
])


if Rails.env == 'test'

end
