#!/bin/bash
bundle exec rake db:drop
bundle exec rake db:migrate
bundle exec rake db:schema:load 
RAILS_ENV=development bundle exec rake db:seed
RAILS_ENV=test bundle exec rake app:load_demo_data