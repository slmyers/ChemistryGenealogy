# http://www.kbedell.com/2011/03/15/seed-data-versus-testing-data-and-custom-rake-tasks-for-ruby-on-rails/

# rake db:drop db:create db:migrate db:seed app:load_demo_data RAILS_ENV=test
namespace :app do
  desc <<-DESC
    Load testing data.
    Run using the command 'rake app:load_demo_data'
  DESC
  task :load_demo_data => [:environment] do

  # Only data not required in production should be here.
  # If it needs to be there in production, it belongs in seeds.rb.

  User.delete_all
  Admin.delete_all
  Institution.delete_all
  Person.delete_all
  Degree.delete_all
  Supervision.delete_all
  Mentorship.delete_all

  User.create!([
    {
      password: 'testPassword', email: 'testEmail@email.ca', password_digest: 'pword',
      first_name: 'first', last_name: 'last', approved: true
    }
  ])

  # Other test data should be added here...
  Institution.create!([
    {name: 'university of alberta', approved: true},
    {name: 'carlsberg laboratory', approved: true},
    {name: 'university of arkansas', approved: true},
    {name: 'johns hopkins university', approved: true},
    {name: 'university of california, berkeley', approved: true}, #id = 5
    {name: 'nottingham university', approved: true},
    {name: 'national research council of canada', approved: true},
    {name: 'unapproved institution', approved: false} #id = 8
  ])

  Person.create!([
    {name: 'no relations',  position: 'professor', institution_id: 1, approved: true},
    {name: 'person 3 supervisor', position: 'professor', institution_id: 1, approved: true},
    {name: 'supervised by person 2', position: 'professor', institution_id: 2, approved: true},
    {name: 'set all_relations_mentor', position: 'professor', institution_id: 4, approved: true},
    # this person is mentored, mentor, supervisor, supervised
    {name: 'set all_relations_focal', position: 'assistant professor', institution_id: 4, approved: true}, #id = 5
    {name: 'set all_relations_mentored', position: 'professor', institution_id: 4, approved: true},
    {name: 'set all_relations_supervisor', position: 'professor', institution_id: 7, approved: true},
    {name: 'set all_relations_supervised', position: 'professor', institution_id: 6, approved: true},
    {name: 'mentor1', position: 'professor', institution_id: 6, approved: true},
    {name: 'mentor2', position: 'professor', institution_id: 6, approved: true}, #id = 10
    {name: '2 mentors', position: 'professor', institution_id: 6, approved: true},
    {name: 'supervisor1', position: 'professor', institution_id: 6, approved: true},
    {name: 'supervisor2', position: 'professor', institution_id: 6, approved: true},
    {name: '2 supervisors', position: 'professor', institution_id: 6, approved: true},
    {name: 'supervised1', position: 'professor', institution_id: 6, approved: true}, #id = 15
    {name: 'supervised2', position: 'professor', institution_id: 6, approved: true},
    {name: '2 supervised', position: 'professor', institution_id: 6, approved: true},
    {name: '2 mentored', position: 'professor', institution_id: 6, approved: true},
    {name: 'mentored 1', position: 'professor', institution_id: 6, approved: true},
    {name: 'mentored 2', position: 'professor', institution_id: 6, approved: true}, #id = 20
    {name: 'supervises unapproved', position: 'professor', institution_id:6, approved: true},
    {name: 'mentors unapproved', position: 'professor', institution_id: 6, approved: true},
    {name: 'unapproved', position: 'professor', institution_id: 8, approved: false}
  ])

  Degree.create!([
    {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true},
    {year: 1996, institution_id: 8, degree_type: 'masters', approved: false} #id=8
  ])

  Supervision.create!([
    {approved: true, degree_id: 1, person_id: 3, supervisor_id: 2},
    {approved: true, degree_id: 2, person_id: 5, supervisor_id: 7},
    {approved: true, degree_id: 3, person_id: 8, supervisor_id: 5},
    {approved: true, degree_id: 4, person_id: 14, supervisor_id: 13},
    {approved: true, degree_id: 5, person_id: 14, supervisor_id: 12},
    {approved: true, degree_id: 6, person_id: 15, supervisor_id: 17},
    {approved: true, degree_id: 7, person_id: 16, supervisor_id: 17},
    {approved: false, degree_id: 8, person_id: 23, supervisor_id: 21}
  ])

  Mentorship.create!([
    {person_id: 5, mentor_id: 4, start: 1993, end: 1995, institution_id: 1, approved: true},
    {person_id: 6, mentor_id: 5, start: 1996, end: 1996, institution_id: 2, approved: true},
    {person_id: 11, mentor_id: 9, start: 1996, end: 1996, institution_id: 2, approved: true},
    {person_id: 11, mentor_id: 10, start: 1996, end: 1996, institution_id: 2, approved: true},
    {person_id: 19, mentor_id: 18, start: 1996, end: 1996, institution_id: 2, approved: true},
    {person_id: 20, mentor_id: 18, start: 1996, end: 1996, institution_id: 2, approved: true},
    {person_id: 23, mentor_id: 22, start: 1996, end: 1996, institution_id: 2, approved: false}
  ])
  end
end
