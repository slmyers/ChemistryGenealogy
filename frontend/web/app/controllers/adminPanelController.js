angular.module('chemGeno')
.controller('adminPanelController', ['$scope', 'adminPanelService',
function($scope, adminPanelService) {
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


}]);
