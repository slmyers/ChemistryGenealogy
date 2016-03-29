/**
 * @module supervisionNotificationController
 * @class supervisionNotificationController
 * @author Steven Myers
 * Notifications for supervision are dealt with here.
 */

angular.module('chemGeno')
.controller('supervisionNotificationController', ['$scope', '$stateParams', 'viewService', '$q', 'verificationService', '$state',
function($scope, $stateParams, viewService, $q, verificationService, $state) {

  /**
   * Loads the data upon entry of this controller from the services which gets the object desired from the backend
   * of the application :)
   *
   * @method loadData
   */
  $scope.loadData = function() {
    var promises = {
      supervisorPromise: viewService.getPerson($stateParams.supervisorId),
      supervisedPromies: viewService.getPerson($stateParams.supervisedId)
    }
    $q.all(promises).then(function(values) {
      $scope.supervisor = values.supervisorPromise.data;
      $scope.supervised = values.supervisedPromies.data;
      console.log('supervisor');
      console.log($scope.supervisor);
      console.log('supervised');
      console.log($scope.supervised);
    });
  }

  //This method is called when this controller first invoked at all by the application.
  $scope.loadData();

  /**
   * Verifies the supervision notification.
   *
   * @method verifySupervision
   */
  $scope.verifySupervision = function() {
    var paramObj = {supervision: $stateParams.supervisionId};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  /**
   * Rejects the supervision notification
   *
   * @method rejectSupervision
   */
  $scope.rejectSupervision = function() {
    var paramObj = {supervision: $stateParams.supervisionId};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  $scope.mentorDetails = true;
  $scope.mentoredDetails = true;
  $scope.supervisedDetails = true;
  $scope.supervisorDetails = true;

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
