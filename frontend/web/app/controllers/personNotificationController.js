angular.module('chemGeno')
.controller('personNotificationController', ['$scope', '$stateParams', 'verificationService', '$state',
function($scope, $stateParams, verificationService, $state) {
  // unpacking person parameter
  $scope.person = $stateParams.person.target.person;
  $scope.personInstitution = $stateParams.person.target.person_institution;
  $scope.mentored = $stateParams.person.mentored;
  $scope.mentors = $stateParams.person.mentors;
  $scope.supervisors = $stateParams.person.supervisors;
  $scope.supervised = $stateParams.person.supervised;

  // ui visibility stuff
  $scope.mentorVisibility = false;
  $scope.mentoredVisibility = false;
  $scope.supervisedVisibility = false;
  $scope.supervisorVisibility = false;

  $scope.verifyPerson = function() {
    var paramObj = {person: $scope.person.id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };

  $scope.rejectPerson = function() {
    var paramObj = {person: $scope.person.id};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $state.go('main.admin');
    }, function(error){
      alert(error);
    });
  };
}]);
