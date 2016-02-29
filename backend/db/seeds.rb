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
  {name: 'david bundle', position: 'professor emeritus', institution_id: 1, approved: true},
  {name: 'moreten meldel', position: nil, institution_id: nil, approved: true},
  {name: 'raymond lemieux', position: nil, institution_id: nil, approved: true},
  {name: 'james baddiley', position: nil, institution_id: nil, approved: true},
  {name: 'jun liu', position: nil, institution_id: nil, approved: true},
  {name: 'clinton ballou', position: nil, institution_id: nil, approved: true},
  {name: 'harold jennings', position: nil, institution_id: nil, approved: true}
])

Degree.create!([
  {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 2008, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1980, institution_id: 1, degree_type: 'phd', approved: true},
  {year: 1971, institution_id: 6, degree_type: 'phd', approved: true}
])

Supervisor.create!([
  {approved: true, degree_id: 1, person_id: 1, supervisor_id: 3},
  {approved: true, degree_id: 2, person_id: 2, supervisor_id: 1},
  {approved: true, degree_id: 3, person_id: 3, supervisor_id: 6},
  {approved: true, degree_id: 4, person_id: 4, supervisor_id: 7}
])

Postdoc.create!([
  {start: 1993, end: 1995, institution_id: 1, approved: true},
  {start: 1996, end: 1996, institution_id: 2, approved: true},
  {start: 2008, end: 2012, institution_id: 4, approved: true},
  {start: 1980, end: 1981, institution_id: 5, approved: true},
  {start: 1971, end: 1973, institution_id: 7, approved: true},
  {start: 1973, end: 1975, institution_id: 1, approved: true}
])

Mentor.create!([
  {person_id: 1, postdoc_id: 1, mentor_id: 4, approved: true},
  {person_id: 1, postdoc_id: 2, mentor_id: 5, approved: true},
  {person_id: 2, postdoc_id: 3, mentor_id: 8, approved: true},
  {person_id: 3, postdoc_id: 4, mentor_id: 9, approved: true},
  {person_id: 4, postdoc_id: 5, mentor_id: 10, approved: true},
  {person_id: 4, postdoc_id: 6, mentor_id: 6, approved: true}
])


### make more accurate test cases later
=begin
  Person.create!([
    {name: 'person 1', position: 'professor', institution_id: 1, approved: true}, #id = 5
    {name: 'person 2', position: 'professor', institution_id: 2, approved: true},
    {name: 'person 3', position: 'professor', institution_id: 3, approved: true},
    {name: 'person 4', position: 'professor', institution_id: 4, approved: true}  #id = 8
  ])

  Degree.create!([
    {year: 1993, institution_id: 1, degree_type: 'phd', approved: true}, #id = 5
    {year: 2008, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1980, institution_id: 3, degree_type: 'phd', approved: true},
    {year: 1971, institution_id: 6, degree_type: 'phd', approved: true} #id = 8
  ])

  Supervisor.create!([
    {approved: true, degree_id: 5, person_id: 5, supervisor_id: 8}, #id = 5
    {approved: true, degree_id: 6, person_id: 6, supervisor_id: 8},
    {approved: true, degree_id: 7, person_id: 7, supervisor_id: 1},
    {approved: true, degree_id: 8, person_id: 8, supervisor_id: 2} #id = 8
  ])

  Postdoc.create!([
    {start: 1993, end: 1995, institution_id: 1, approved: true},
    {start: 1996, end: 1996, institution_id: 2, approved: true},
    {start: 2008, end: 2012, institution_id: 4, approved: true},
    {start: 1980, end: 1981, institution_id: 5, approved: true}
  ])

  Mentor.create!([
    {person_id: 6, postdoc_id: 5, mentor_id: 8, mentor_name: 'person 4', approved: true},
    {person_id: 8, postdoc_id: 6, mentor_id: 1, mentor_name: 'todd lowary', approved: true},
    {person_id: 7, postdoc_id: 7, mentor_id: 8, mentor_name: 'person 4', approved: true},
    {person_id: 7, postdoc_id: 8, mentor_id: nil, mentor_name: 'some dude', approved: true},
  ])
=end
