angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', 'loginService', '$mdToast',
function($scope, $mdDialog, loginService, $mdToast) {
  $scope.master = {};
  $scope.invalidLogin = false;
  $scope.registration = false;

  $scope.submit = function(user) {
    var promise = loginService.login(user);
    promise.then(function() {
        $mdDialog.cancel();
        $scope.invalidLogin = false;
      }, function(res){
        console.log(res);
        $scope.invalidLogin = true;
        $scope.user = angular.copy($scope.master);
    });
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
    $scope.user = angular.copy($scope.master);
  };
}]);
