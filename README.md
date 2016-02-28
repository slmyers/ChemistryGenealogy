# ChemistryGenealogy
401 project for the client: Dr. Todd Lowary

### Wiki 

Relevant documentation can be found in the [wiki](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki). Don't forget to check the 'pages' section on the right. 

# running instructions for backend 

_assuming dependencies have been installed etc_

1) in the `backend` folder run `chmod +x reloadDB.sh`, and then `./reloadDB.sh` this will run migrations, load schema and buil test + development db

2) to run tests: make sure `RAILS_ENV=test` and run `rake spec`, otherwise the testing framework can't access the database

3) to live demo: make sure `RAILS_ENV=development` and run `rails s`
