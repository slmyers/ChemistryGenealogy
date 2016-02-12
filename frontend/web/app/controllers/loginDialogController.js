angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', 'loginService',
function($scope, $mdDialog, loginService) {
  $scope.master = {};

  $scope.submit = function(user) {
    var promise = loginService.login(user);
    promise.then(function() {
        $mdDialog.cancel();
      }, function(res){
        console.log(res.error);
        $mdDialog.show();
    });
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
    $scope.user = angular.copy($scope.master);
  };
}]);
