angular.module('chemGeno')
.controller('supervisionNotificationController', ['$scope', '$stateParams', 'viewService', '$q',
function($scope, $stateParams, viewService, $q) {
  $scope.loadData = function() {
    var promises = {
      supervisorPromise: viewService.getPerson($stateParams.supervisorId),
      supervisedPromies: viewService.getPerson($stateParams.supervisedId)
    }
    $q.all(promises).then(function(values) {
      $scope.supervisor = values.supervisorPromise.data;
      $scope.supervised = values.supervisedPromies.data;
    });
  }
  $scope.loadData();
  // ui booleans for mentor info
  $scope.supervisor_mentorVisibility = false;
  $scope.supervisor_mentoredVisibility = false;
  $scope.supervisor_supervisedVisibility = false;
  $scope.supervisor_supervisorVisibility = false;
  // ui booleans for mentee info
  $scope.supervised_mentorVisibility = false;
  $scope.supervised_mentoredVisibility = false;
  $scope.supervised_supervisedVisibility = false;
  $scope.supervised_supervisorVisibility = false;
}]);
