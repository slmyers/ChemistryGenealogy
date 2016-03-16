/**
 * @class our routes
 */
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
    templateUrl: '/app/views/search.html'
  })
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
  .state('main.adminPanelDetailed',{
    url: '/adminPanelDetailed',
    templateUrl: '/app/views/adminPanelDetailed.html'
  })
  .state('main.view',{
    url: '/view/:id',
    templateUrl: '/app/views/view.html'
  })
});
