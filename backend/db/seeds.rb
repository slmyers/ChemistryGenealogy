# seeds different databases etc

# test + development + production data
User.create!([
  {
    password: 'testPassword', email: 'testEmail@email.ca', password_digest: 'pword',
    first_name: 'first', last_name: 'last', approved: true
  },
  {
    password: 'admin', email: 'tlowary@ualberta.ca', password_digest: 'pword',
    first_name: 'todd', last_name: 'lowary', approved: true
  },
  {
    password: 'user', email: 'user@ualberta.ca', password_digest: 'pword',
    first_name: 'josh', last_name: 'cameron', approved: true
  }
])

# add Todd Lowary as an admin
Admin.create!([
  {user_id: 1, approved: true},
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
  {name: 'david bundle', position: 'professor emeritus', institution_id: 1, approved: true},
  {name: 'moreten meldel', position: nil, institution_id: nil, approved: true},
  {name: 'raymond lemieux', position: nil, institution_id: nil, approved: true},
  {name: 'james baddiley', position: nil, institution_id: nil, approved: true},
  {name: 'jun liu', position: nil, institution_id: nil, approved: true},
  {name: 'clinton ballou', position: nil, institution_id: nil, approved: true},
  {name: 'harold jennings', position: nil, institution_id: nil, approved: true} #id=10
])

Degree.create!([
  {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 2008, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1980, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1971, institution_id: 6, degree_type: 'phd', approved: true}
])

Supervision.create!([
  {approved: true, degree_id: 1, person_id: 1, supervisor_id: 3},
  {approved: true, degree_id: 2, person_id: 2, supervisor_id: 1},
  {approved: true, degree_id: 3, person_id: 3, supervisor_id: 6},
  {approved: true, degree_id: 4, person_id: 4, supervisor_id: 7}
])

Mentorship.create!([
  {person_id: 1, mentor_id: 4, start: 1993, end: 1995, institution_id: 1, approved: true},
  {person_id: 1, mentor_id: 5, start: 1996, end: 1996, institution_id: 2, approved: true},
  {person_id: 2, mentor_id: 8, start: 2008, end: 2012, institution_id: 4, approved: true},
  {person_id: 3, mentor_id: 9, start: 1980, end: 1981, institution_id: 5, approved: true},
  {person_id: 4, mentor_id: 10, start: 1971, end: 1973, institution_id: 7, approved: true},
  {person_id: 4, mentor_id: 6, start: 1973, end: 1975, institution_id: 1, approved: true}
])

# delete this next data when in production
# this is to test notifications while in development enviroment
Person.create!([
  {name: 'Steven Myers', position: 'professor', institution_id: 1, approved: false},
  {name: 'steve supervised', position: 'prof', institution_id: 1, approved: true},
  {name: "steve's mentor", position: 'professor', institution_id: 1, approved: true},
  {name: "steve's mentored", position: 'professor', institution_id: 1, approved: true},
  {name: "x mentor", position: "professor", institution_id: 1, approved: true}, #id=15
  {name: "mentored by x", position: "professor", institution_id: 1, approved: true},
  {name: "y supervisor", position: "professor", institution_id:3, approved: true},
  {name: "supervised by y", position: "professor", institution_id: 2, approved: true}
])

Degree.create!([
  {year: 2024, institution_id: 1, degree_type: 'phd', approved: false},
  {year: 2030, institution_id: 1, degree_type: 'phd', approved: false},
  {year: 2050, institution_id: 4, degree_type: 'masters', approved: false}
])

Supervision.create!([
  {approved: false, degree_id: 5, person_id: 11, supervisor_id: 1},
  {approved: false, degree_id: 6, person_id: 12, supervisor_id: 11},
  {approved: false, degree_id: 7, person_id: 18, supervisor_id: 17}
])

Mentorship.create!([
  {person_id: 11, mentor_id: 13, start: 2026, end: 2027, institution_id: 1, approved: false},
  {person_id: 14, mentor_id: 11, start: 2031, end: 2032, institution_id: 1, approved: false},
  {person_id: 16, mentor_id: 15, start:1999, end:2001, institution_id: 2, approved: false}
])

User.create!([
  {
    password: 'xxx', email: 'notificationUser@email.ca', password_digest: 'pword',
    first_name: 'james', last_name: 'brown', approved: false
  },
  {
    password: 'xxx', email: 'notificationAdmin@email.ca', password_digest: 'pword',
    first_name: 'tupac', last_name: 'shakur', approved: true
  }
])

Admin.create!([
  {user_id: 5, approved: false}
])
