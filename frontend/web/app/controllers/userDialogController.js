angular.module('chemGeno')
.controller('userDialogController', ['$scope', '$mdDialog', 'loginService', 'registerService',
function($scope, $mdDialog, loginService, registerService) {
  $scope.master = {};
  // turned true upon recieving an error for login request
  $scope.invalidLogin = false;
  // turned true if user clicks the registration button
  $scope.registration = false;

  $scope.submitLogin = function(loginUser) {
    var promise = loginService.login(loginUser);
    promise.then(function(res) {
      console.log('sucessful login: ' + res.data.user.username);
      $mdDialog.cancel();
      $scope.invalidLogin = false;
    }, function(error){
      console.log(error);
      $scope.invalidLogin = true;
      $scope.user = angular.copy($scope.master);
    });
  };

  $scope.submitRegistration = function(registerUser) {
    var promise = registerService(registerUser);
    promise.then(function(res) {
      console.log(res);
      $mdDialog.cancel();
    }, funcion(error){
      console.log(error);
    });
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
