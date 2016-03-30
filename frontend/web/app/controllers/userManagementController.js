/**
 *  @author Steven Myers
 */

angular.module('chemGeno')
.controller('userManagementController', ['$scope', '$stateParams', 'verificationService',
'adminPanelService', '$q',
function($scope, $stateParams, verificationService, adminPanelService, $q)  {
  // user notifications are sent in params
  // TODO: refactor and only call for user notifications in this state
  $scope.userData = $stateParams.userNotifications;
  $scope.userNotifications = true;
  $scope.userInfo = false;
  $scope.adminInfo = false;

  $scope.loadData = function() {
    var promises = {
      usersPromise: adminPanelService.getUsers(),
      adminsPromise: adminPanelService.getAdmins()
    }
    $q.all(promises).then(function(values) {
      $scope.users = values.usersPromise.data;
      $scope.admins = values.adminsPromise.data;
    });
  }
  $scope.loadData();




  $scope.userNotifs = function() {
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
