#!/bin/bash
# uses migrations to construct database then seeds database with test data
rake db:drop
rake db:migrate
rake db:schema:load
# change to development or test depending on context
rake db:seed RAILS_ENV=test
# might be useless
rake db:seed RAILS_ENV=development
