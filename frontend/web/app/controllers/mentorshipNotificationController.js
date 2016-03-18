angular.module('chemGeno')
.controller('mentorshipNotificationController', ['$scope', '$stateParams', 'viewService', '$q',
function($scope, $stateParams, viewService, $q) {
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
  }
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
