/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('supervisionNotificationsController', ['$scope','verificationService', '$state',
function($scope, verificationService, $state) {
  $scope.viewSupervision = function(supervision){
    $state.go('main.supervisionNotification',
    {
      supervisorId: supervision.supervisor.person.id,
      supervisedId: supervision.supervised.person.id,
      supervisionId: supervision.supervision.data.id
    });
  }
}]);
