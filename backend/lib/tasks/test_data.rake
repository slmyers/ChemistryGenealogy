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

  # Other test data should be added here...
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
    {name: 'no relations',  position: 'professor', institution_id: 1, approved: true},
    {name: 'person 3 supervisor', position: 'professor', institution_id: 1, approved: true},
    {name: 'supervised by person 2', position: 'professor', institution_id: 2, approved: true},
    {name: 'set all_relations_mentor', position: 'professor', institution_id: 3, approved: true},
    # this person is mentored, mentor, supervisor, supervised
    {name: 'set all_relations_focal', position: 'assistant professor', institution_id: 4, approved: true},
    {name: 'set all_relations_mentored', position: 'professor', institution_id: nil, approved: true},
    {name: 'set all_relations_supervisor', position: 'professor', institution_id: 7, approved: true},
    {name: 'set all_relations_supervised', position: 'professor', institution_id: 6, approved: true}
  ])

  Degree.create!([
    {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 1, degree_type: 'phd', approved: true},
    {year: 1993, institution_id: 2, degree_type: 'phd', approved: true}
  ])

  Supervision.create!([
    {approved: true, degree_id: 1, person_id: 3, supervisor_id: 2},
    {approved: true, degree_id: 2, person_id: 5, supervisor_id: 7},
    {approved: true, degree_id: 3, person_id: 8, supervisor_id: 5}
  ])

  Mentorship.create!([
    {person_id: 5, mentor_id: 4, start: 1993, end: 1995, institution_id: 1, approved: true},
    {person_id: 6, mentor_id: 5, start: 1996, end: 1996, institution_id: 2, approved: true}
  ])
  puts 'completed'
  end
end
