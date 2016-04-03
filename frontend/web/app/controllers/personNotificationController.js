/**
 * @module personNotificationController
 * @class personNotificationController
 * @author Steven Myers
 * Notifications for persons are dealt with here.
 */

angular.module('chemGeno')
.controller('personNotificationController', ['$scope', 'viewService', '$stateParams', 'verificationService', '$state',
function($scope, viewService, $stateParams, verificationService, $state) {

  $scope.loadData = function(){
    console.log($stateParams.personId);
    var promise = viewService.getPerson($stateParams.personId);
    promise.then(function(resp){
      $scope.data = resp.data;
      console.log($scope.data);
    }, function(error) {
      console.log("unable to retrive information about person: " + $stateParams.personId);
      console.log(error);
    })
  }

  $scope.loadData();

  // ui visibility stuff
  $scope.mentorDetails = true;
  $scope.mentoredDetails = true;
  $scope.supervisedDetails = true;
  $scope.supervisorDetails = true;

  /**
   * This method is invoked when we want to verify a person notification.
   *
   * @method verifyPerson
   */
  $scope.verifyPerson = function() {
    var paramObj = {person: $scope.data.person.data.id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      console.log(error);
    });
  };

  /**
   * This methid is invoked when we want to reject a person notification.
   *
   * @method rejectPerson
   */
  $scope.rejectPerson = function() {
    var paramObj = {person: $scope.data.person.data.id};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  $scope.allDetails = function() {
    $scope.mentorDetails = true;
    $scope.mentoredDetails = true;
    $scope.supervisedDetails = true;
    $scope.supervisorDetails = true;
  };

  $scope.onlyMentorDetails = function(){
    $scope.mentorDetails = true;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = false;
  }

  $scope.onlyMentoredDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = true;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = false;
  }

  $scope.onlySupervisedDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = true;
    $scope.supervisorDetails = false;
  }

  $scope.onlySupervisorDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = true;
  }
}]);
