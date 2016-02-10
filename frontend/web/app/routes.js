angular.module('chemGeno')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/search');
            $stateProvider
              .state('main', {
                abstract: 'true',
                templateUrl: 'views/main.html'
              })
              .state('main.search', {
                url: '/search',
                controller: 'SearchCtrl',
                templateUrl: 'views/search.html'
              });
        });
