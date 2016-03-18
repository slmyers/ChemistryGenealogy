angular.module('chemGeno')
.controller('personNotificationController', ['$scope', '$stateParams',
function($scope, $stateParams) {
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
}]);
