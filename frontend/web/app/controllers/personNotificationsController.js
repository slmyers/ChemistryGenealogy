/**
 * @module personNotificationController
 * @class personNotificationController
 * @author Steven Myers
 * Notifications for persons are dealt with here.
 */

angular.module('chemGeno')
.controller('personNotificationsController', ['$scope', '$stateParams', 'verificationService', '$state',
function($scope, $stateParams, verificationService, $state) {
  $scope.gotoPerson = function(){
    console.log('called');
  }
}]);
