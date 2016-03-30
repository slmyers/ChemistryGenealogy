/**
 * @module personNotificationController
 * @class personNotificationController
 * @author Steven Myers
 * Notifications for persons are dealt with here.
 */

angular.module('chemGeno')
.controller('personNotificationsController', ['$scope', 'verificationService', '$state',
function($scope, verificationService, $state) {
  $scope.gotoPerson = function(person){
    $state.go('main.personNotification', {personId: person.target.person.id})
  }
}]);
