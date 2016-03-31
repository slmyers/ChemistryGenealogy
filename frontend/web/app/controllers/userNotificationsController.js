/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('userNotificationsController', ['$scope', 'verificationService', '$rootScope',
function($scope, verificationService, $rootScope) {
  $scope.approveUser = function(user,index) {
    var paramObj = {user: user.id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.splice(index, 1);
      $rootScope.$broadcast('userMangement:reload');
    }, function (error) {
      alert(error);
    });
  };

  $scope.rejectUser = function(user, index) {
    var paramObj = {user: user.id};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.splice(index, 1);
    }, function(error){
      alert(error);
    })
  }
}]);
