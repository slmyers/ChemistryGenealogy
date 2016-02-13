angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', 'loginService',
function($scope, $mdDialog, loginService) {
  $scope.master = {};
  $scope.invalidLogin = false;

  $scope.submit = function(user) {
    var promise = loginService.login(user);
    promise.then(function() {
        $mdDialog.cancel();
      }, function(res){
        console.log(res);
        $scope.invalidLogin = true;
        console.log($scope.invalidLogin);
        $scope.user = angular.copy($scope.master);
    });
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
    $scope.user = angular.copy($scope.master);
  };
}]);
