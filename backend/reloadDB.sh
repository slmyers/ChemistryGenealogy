#!/bin/bash
# i'm sure not all these are required, but my god i've been given so many
# headaches i'm just using the hammer here
# use migrations to construct database
rake db:drop
rake db:migrate
rake db:schema:load
# seed development database with sample data etc
RAILS_ENV=development rake db:seed
# load test data into test db
RAILS_ENV=test rake app:load_demo_data
