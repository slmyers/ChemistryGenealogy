/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('supervisionNotificationsController', ['$scope', '$stateParams', 'verificationService', '$state',
function($scope, $stateParams, verificationService, $state) {
  $scope.viewSupervision = function(){
    console.log('called');
  }
}]);
