/**
 * @author Steven Myers
 */

angular.module('chemGeno')
.controller('userNotificationsController', ['$scope', 'verificationService',
function($scope, verificationService) {
  $scope.approveUser = function(user,index) {
    var paramObj = {user: user.id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };
}]);
