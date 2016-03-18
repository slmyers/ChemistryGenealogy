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
    url: '/edit/:id',
    templateUrl: '/app/views/edit.html'
  })
  .state('main.admin',{
    url: '/admin',
    templateUrl: '/app/views/admin.html'
  })
  .state('main.view',{
    url: '/view/:id',
    templateUrl: '/app/views/view.html'
  })
  .state('main.auditTrail',{
    url: '/auditTrail',
    templateUrl: '/app/views/auditTrail.html'
  })
  .state('main.personNotification', {
    url: '/personNotification',
    templateUrl: 'app/views/personNotification.html',
    params: {person: null},
  })
  .state('main.mentorshipNotification', {
    url: '/mentorshipNotification/mentor/:mentorId/mentee/:menteeId/mentorship/:mentorshipId',
    templateUrl: 'app/views/mentorshipNotification.html'
  })
  .state('main.supervisionNotification', {
    url: '/supervisionNotification/supervisor/:supervisorId/supervised/:supervisedId/supervision/:supervisionId',
    templateUrl: 'app/views/supervisionNotification.html'
  })
});
