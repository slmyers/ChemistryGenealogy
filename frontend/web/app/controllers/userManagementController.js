/**
 *  @author Steven Myers
 */

angular.module('chemGeno')
.controller('userManagementController', ['$scope', '$stateParams', 'verificationService',
function($scope, $stateParams, verificationService) {
  $scope.userData = $stateParams.userNotifications;
  console.log($scope.userData)

  $scope.userNotifications = true;
  $scope.userInfo = false;
  $scope.adminInfo = false;

  $scope.userNotifications = function() {
    $scope.userNotifications = true;
    $scope.userInfo = false;
    $scope.adminInfo = false;
  }

  $scope.viewUsers = function() {
    $scope.userNotifications = false;
    $scope.userInfo = true;
    $scope.adminInfo = false;
  }

  $scope.viewAdmins = function() {
    $scope.userNotifications = false;
    $scope.userInfo = false;
    $scope.adminInfo = true;
  }


}]);
