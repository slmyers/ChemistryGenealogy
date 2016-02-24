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
        });
