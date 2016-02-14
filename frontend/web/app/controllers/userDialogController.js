angular.module('chemGeno')
.controller('userDialogController', ['$scope', '$mdDialog', 'loginService',
function($scope, $mdDialog, loginService) {
  $scope.master = {};
  $scope.invalidLogin = false;
  $scope.registration = false;

  $scope.submitLogin = function(loginUser) {
    var promise = loginService.login(loginUser);
    promise.then(function(res) {
        console.log('sucessful login: ' + res.data.user.username);
        $mdDialog.cancel();
        $scope.invalidLogin = false;
      }, function(res){
        console.log(res);
        $scope.invalidLogin = true;
        $scope.user = angular.copy($scope.master);
    });
  };

  $scope.submitRegistration = function(user) {
    console.log('register');
    $mdDialog.cancel();
  };

  $scope.cancelLogin = function() {
    $mdDialog.cancel();
    $scope.loginUser = angular.copy($scope.master);
  };

  $scope.cancelRegistration = function() {
    $mdDialog.cancel();
    $scope.registerUser = angular.copy($scope.master);
  };
}]);
