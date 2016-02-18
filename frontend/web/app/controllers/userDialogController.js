angular.module('chemGeno')
.controller('userDialogController', ['$scope', '$mdDialog', 'loginService', 'registerService',
function($scope, $mdDialog, loginService, registerService) {
  $scope.master = {};
  // turned true upon recieving an error for login request
  $scope.invalidLogin = false;
  // turned true if user clicks the registration button
  $scope.registration = false;
  // turned true upon recieving an error for a registration request
  $scope.invalidRegistration = false;


  $scope.submitLogin = function(loginUser) {
    console.log(loginUser);
    var promise = loginService.login(loginUser);
    promise.then(function(res) {
      console.log('sucessful login: ' + res.data.user.username);
      $scope.invalidLogin = false;
      $mdDialog.cancel();
    }, function(error){
      console.log(error);
      $scope.invalidLogin = true;
      $scope.loginUser = angular.copy($scope.master);
    });
  };

  $scope.submitRegistration = function(registerUser) {
    var promise = registerService.register(registerUser);
    promise.then(function(res) {
      console.log('succes registration');
      console.log(res);
      $scope.invalidRegistration = false;
      $scope.submitLogin(registerUser);
    }, function(error){
      console.log('error in registration');
      console.log(error);
      $scope.invalidRegistration = true;
      $scope.registerUser = angular.copy($scope.master);
    });
  };

  $scope.cancelLogin = function() {
    $mdDialog.cancel();
    $scope.loginUser = angular.copy($scope.master);
  };

  $scope.cancelRegistration = function() {
    $mdDialog.cancel();
    $scope.registerUser = angular.copy($scope.master);
  };

  $scope.toRegistrationView = function() {
    $scope.invalidLogin = false;
    $scope.invalidRegistration = false;
    $scope.registration = true;
  }
}]);
