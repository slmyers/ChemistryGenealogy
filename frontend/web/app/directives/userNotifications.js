/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('userNotifications', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: '/app/views/userNotifications.html',
    controller: 'userNotificationsController'
  }
});
