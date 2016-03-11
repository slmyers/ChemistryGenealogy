/**
 * Routes are going to be how each of the parts of our apps connect to one another.
 * Eg: The search screen to the submit screen.
 *
 * These are state changes.
 */
angular.module('chemGeno')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/search');


            //Submit person route should have a people table/ person table and then post it to that but
            //will contain postdocs into that, don't want to send a postdoc person and inst and other requests
            //to the routes.
            //Many routes we may not want.
            //Note this is front end.

            //When it goes to people or person route then data will have postdoc and mentor wrapped in this doc.
            //cannot do person.save because that will have forien things in there. Will need to do save.postdoc
            //save.degrees and then these will have foriegn keys and then FK's will be equal to the things
            //and then relate them. Will nto be as trivial as we may want.

            //Easiest way to do it.
            //saving person might be tricky.
            //service is the thing that is built.... service is the connector between front and backend
            //put http requests in there. put search reuslts in there and may share that service because you have
            //search and vosualization. so share the results between these two.
            //
            //Will have a query string or put in json some sort of search and then it'll be processed and sent
            //back as a response. Want to do autocomplete? Debounce with search, setting a leg... don't get anything
            //for 3seconds (or something) then send that search result to him and send it to some autocomplete thing
            //and then he will rattle off titles of things to search for. Builds an actual response for everything
            //could be a bigger package. Search could also have results cached, not a real time app. Search connor
            //and search connor again shouldnt need to go to website yet again. but we're not worried about changes
            //Piece of data invalid in cache, worst thing is user will be like "thatsweird"  start with standard
            //search and then ignore autocomplete for now.


            /** Main state-- but cannot be actually done because it is abstract. **/
            $stateProvider
              .state('main', {
                abstract: 'true', //This makes it so we cannot have an actual page for this.
                templateUrl: '/app/views/main.html'
              })

              /** Search page information **/
              .state('main.search', {
                url: '/search',
                templateUrl: '/app/views/search.html'
              })

                /** Submit page information **/
              .state('main.submit', {
                url: '/submit',
                templateUrl: '/app/views/submit.html'
              })

                .state('main.edit',{
                    url: '/edit',
                    templateUrl: '/app/views/edit.html'
                })

                .state('main.admin', {
                    url: '/admin',
                    templateUrl: '/app/views/adminPanel.html'
                })

        });
