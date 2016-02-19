angular.module('chemGeno')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/search');
            $stateProvider
              .state('main', {
                abstract: 'true',
                templateUrl: '/app/views/main.html'
              })
              .state('main.search', {
                url: '/search',
                //controller: 'SearchCtrl',
                templateUrl: '/app/views/search.html'
              })
              .state('main.submit', {
                url: '/submit',
                  templateUrl: '/app/views/submit.html'
              })
        });
