#!/bin/bash
# uses migrations to construct database then seeds database with test data
rake db:drop
rake db:migrate
rake db:schema:load
rake db:seed RAILS_ENV=development
# change to development or test depending on context
rake db:seed RAILS_ENV=test
