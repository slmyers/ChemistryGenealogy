#!/bin/bash
# uses migrations to construct database then seeds database with test data
rake db:drop
rake db:migrate
rake db:schema:load
