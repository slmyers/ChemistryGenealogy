angular.module('chemGeno')
.controller('adminPanelController', ['$scope', 'adminPanelService', 'verificationService',
function($scope, adminPanelService, verificationService) {
  $scope.loadData = function() {
    var promise = adminPanelService.loadNotifications();
    promise.then(function(resp){
      $scope.data = resp.data;
      console.log($scope.data)
    }, function(error){
      alert('error loading notifications');
    })
  };
  $scope.loadData();

  $scope.approveUser = function(index) {
    var paramObj = {user: $scope.data.user_notifications[index].id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.user_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };

  $scope.approveAdmin = function(index) {
    var paramObj = {admin: $scope.data.admin_notifications[index].id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.admin_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  }


}]);
