/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('mentorshipNotificationsController', ['$scope', '$stateParams', 'verificationService', '$state',
function($scope, $stateParams, verificationService, $state) {
  $scope.viewMentorship = function(mentorship){
    $state.go('main.mentorshipNotification',
    {
      mentorId: mentorship.mentor.person.id,
      menteeId: mentorship.mentored.person.id,
      mentorshipId: mentorship.mentorship.data.id
    });
  }
}]);
