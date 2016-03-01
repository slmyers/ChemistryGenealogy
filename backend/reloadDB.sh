#!/bin/bash
# i'm sure not all these are required, but my god i've been given so many
# headaches i'm just using the hammer here
# uses migrations to construct database then seeds database with test data
rake db:drop
rake db:migrate
rake db:schema:load
RAILS_ENV=development rake db:seed
# change to development or test depending on context
RAILS_ENV=test rake app:load_demo_data
