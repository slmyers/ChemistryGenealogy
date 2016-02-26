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
  {name: 'university of alberta', approved: true}
])

# the last two are not correct... just using to test relationship creations
Person.create!([
  {name: 'todd lowary', position: 'professor', institution_id: 1, approved: true},
  {name: 'david bundle', position: 'professor', institution_id: 1, approved: true},
  {name: 'ole hindsgaul', position: 'professor', institution_id: 1, approved: true}
])

Postdoc.create!([
  {start:1993, end:1995, institution_id:1, approved:true}
])

Mentor.create!([
  {name: 'david bundle', person_id: 1, postdoc_id: 1, mentor_id: 2, approved: true}
])

Degree.create!([
  {year: 1993, institution_id: 1, approved: true}
])

Supervisor.create!([
  {approved: true, degree_id: 1, person_id: 1, supervisor_id:3}
])
