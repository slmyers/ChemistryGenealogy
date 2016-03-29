/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('mentorshipNotificationsController', ['$scope', '$stateParams', 'verificationService', '$state',
function($scope, $stateParams, verificationService, $state) {
  $scope.viewMentorship = function(){
    console.log('called');
  }
}]);
