/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('mentorshipNotifications', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: '/app/views/mentorshipNotifications.html',
    controller: 'mentorshipNotificationsController'
  }
});
