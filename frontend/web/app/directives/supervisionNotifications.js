/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('supervisionNotifications', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: '/app/views/supervisionNotifications.html',
    controller: 'supervisionNotificationsController'
  }
});
