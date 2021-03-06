###Sprint 1

#####January 9, 2016 - January 15, 2016

* made two demo projects:

1. [angular2 frontend demo] (https://github.com/slmyers/angular2Demo)  

2. [token based backend authentication service in `Go`] (https://github.com/slmyers/authService)


#####January 16, 2016 - January 22, 2016
* worked on sprint1 'planning' -- involved with technology and architecture decisions.

https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/Technology-choices-(and-pointers)

https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/Initial-Software-Design

* [researched data visualizations] (https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/Visualization-Concepts)

* made [prototype search page](http://401chemistrygenealogy.github.io/)

---

###Sprint 2

#####January 23, 2016 - January 29, 2016
* was ill :(

#####January 30, 2016 - February 5, 2016
* made two demo projects:

1. [frontend demo] (https://github.com/slmyers/angular1Demo)

2. [architecture demo] (https://github.com/slmyers/401TodoDemo)

#####February 6, 2016 - February 12, 2016
* worked on the start of the [frontend]  (https://github.com/401ChemistryGenealogy/ChemistryGenealogy/tree/master/frontend) -- sole contributor to frontend code at this point ___Feb 10th 1:31 pm___.

* developed the frontend authentication logic

* working on backend token authentication

* got the frontend to request and store an authentication token from the backend

---

###Sprint 3

####February 13, 2016 - February 20, 2016
* made backend (rails) runnable in Windows

* fixed broken code in backend

* implemented user login and registration -- frontend + backend

* communicated with client: request + recieve sample data, scheduled team meeting w/ client

* implemented mock search service in frontend using sample data

* changed user login/registration to require email/password instead of username/password -- touched full stack from db to view.

* wrote script to reload and seed the database

* wrote unit tests for login and registration on the frontend

####February 21, 2016 - February 28, 2016

* wrote up [backend data model](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/data-model)

* updated frontend code to reflect new registration process -- users must be approved

* cleaned up db migrations and got rid of `contact_us_tickets` and `information` table (backend)

* [issue 25](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/issues/25)

* created routes and db schema for [backend data model](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/wiki/data-model)

* learned [rspec testing framework for ruby](http://rspec.info/)

* implemented backend data model 

* implemented backend search + unit tested 

* implmented backend autocomplete + unit tested

####February 21, 2016 - March 6, 2016

* revised data model
* implemented revised model
* refactored backend search code
* [issue 29](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/issues/29)
* [issue 30](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/issues/30)
* connected frontend submit service to backend aggregated route 
* made UML for front and backend 
* made documentation section of wiki 

---

###Sprint 4

####March 7, 2016 - March 13, 2016

* connor sheremeta was unable to produce a functional frontend search, so I discarded his code and started from 
_scratch_ to implement a proper system -- his only filtered names in local memory, ie a hardcoded array. 
* implemented frontend autocomplete 
* implemented frontend search 

####March 14, 2016 - March 21, 2016

* implemented backend + frontend detail information (full story/use case)
* closed [issue 34](https://github.com/401ChemistryGenealogy/ChemistryGenealogy/issues/34)
* implemented backend + frontend for admin notifications (full story/use case)
* implemented backend + frontend for information verification (full story/use case) 
* auto generated documentation 
* wrote various tests
* updated UI

--- 

###Sprint 5 

* reworked UI for view/admin panels 
* found bugs in search 
* found bugs in autocomplete
* found bugs in verification 

--- 

###After 

* deployed application 
* made presentation 
* made screencast

--- 

###Note: 

My total contributions:

1. Search (frontend + backend + backend testing)
2. Autocomplete (frontend + backend + backend testing)
3. Authentication (frontend + backend + backend testing) => tests apply to certain routes requiring an authentication token 
4. Registration (frontend + backend) 
5. Logout (frontend, no backend is present)
6. Designing the data model (Meysam did help)
7. Implementing the data model (wrote ActiveRecord migrations)
8. Detail/View person (frontend + backend)
9. Admin notifications (frontend + backend + backend testing) 
10. Approval and Rejection of Admin notifications (frontend + backend + backend testing)
11. User management (frontend + backend)
12. Frontend views for all notifications 
13. implementing the testing framework for both the backend RSpec, and the rake tasks to load test data into the test database. 
14. The frontend admin panel (Connor Sheremeta did add a button). 
15. The *backend* for visualization or the service that *loads data* from the backend (I wrote all of that). 
16. Generating the HTML Rails documentation. (I beleive others might have done so after I instructed them how to do it but all of our submitted generated documention is due to my efforts). 

My significant contributions: 

1. I also contributed to the submit story (I added the authentication logic to the client request and aided Cole Evans in writing the service) and the edit story via my view service (edit loads all the initial data using backend code written by myself). 
2. Cole Evans did write _all_ of our e2e tests, however I wrote the first e2e test as an example, showed him the proper version of protractor to use and set up the conf.js file for the first successful running of a test suite. 
