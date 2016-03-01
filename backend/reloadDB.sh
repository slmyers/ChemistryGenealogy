#!/bin/bash
# uses migrations to construct database then seeds database with test data
rake db:drop
rake db:migrate
rake db:schema:load
RAILS_ENV=development rake db:seed
# change to development or test depending on context
RAILS_ENV=test rake app:load_demo_data
