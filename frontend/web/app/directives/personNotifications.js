/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('personNotifications', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: '/app/views/personNotifications.html',
    controller: 'personNotificationController'
  }
});
