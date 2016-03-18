### database loading script
There is a script `reloadDB.sh` that will load both the test database and the development database.
It tears everything down though, so if you're using it frequently you'll want to remove a few lines.


### test database location/initialization

`/backend/lib/tasks/test_data.rake` is where test data is loaded from. This is the
data that is tested against in the tests. This data is automatically loaded with `./reloadDB.sh`

### test location

tests are located in the `/backend/spec` folder. You can run these with `rake spec`.

### futher documentation

There is further documentation on the [project wiki](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki#documentation).
