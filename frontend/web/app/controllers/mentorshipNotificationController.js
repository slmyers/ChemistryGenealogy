/**
 * @module mentorshipNotificationController
 * @class mentorshipNotificationController
 * @author Steven Myers
 * Notifications for mentorships are dealt with here.
 */

angular.module('chemGeno')
.controller('mentorshipNotificationController', ['$scope', '$stateParams', 'viewService', '$q',
'verificationService', '$state',
function($scope, $stateParams, viewService, $q, verificationService, $state) {
  /**
   * This method when invoked ill load the data from the services from the backend.
   *
   * @method loadData
   */
  $scope.loadData = function() {
    var promises = {
      mentorPromise: viewService.getPerson($stateParams.mentorId),
      menteePromies: viewService.getPerson($stateParams.menteeId)
    }
    $q.all(promises).then(function(values) {
      $scope.mentor = values.mentorPromise.data;
      $scope.mentee = values.menteePromies.data;
      console.log($scope.mentor);
      console.log($scope.mentee);
    });
  };

  /**
   * This method when invoked will approve the mentorship notification
   * @method approveMentorship
   */
  $scope.approveMentorship = function() {
    var paramObj = {mentorship: $stateParams.mentorshipId};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  /**
   * This method when invoked will reject the mentorship notification
   *
   * @method rejectMentorship
   */
  $scope.rejectMentorship = function() {
    var paramObj = {mentorship: $stateParams.mentorshipId};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  //Invoke the load data method at the very start of when this page is loaded.
  $scope.loadData();
  // ui booleans for mentor info
  $scope.mentor_mentorVisibility = false;
  $scope.mentor_mentoredVisibility = false;
  $scope.mentor_supervisedVisibility = false;
  $scope.mentor_supervisorVisibility = false;
  // ui booleans for mentee info
  $scope.mentee_mentorVisibility = false;
  $scope.mentee_mentoredVisibility = false;
  $scope.mentee_supervisedVisibility = false;
  $scope.mentee_supervisorVisibility = false;
}]);
