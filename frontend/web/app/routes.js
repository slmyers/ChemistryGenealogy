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
              .state('terms', {
                url: '/terms',
                templateUrl: '/app/views/terms.html'
              })
              .state('privacy', {
                url: '/privacy',
                templateUrl: '/app/views/privacy.html'
              })
              .state('contact', {
                url: '/contact',
                templateUrl: '/app/views/contact.html'
              });

        });
