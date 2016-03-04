/**
 * Controller for the User Dialogue
 *
 * Status: CONTROLLER
 * Associated files: userDialog.html,
 *
 * The user dialog controller is associated with registration and submission of login information. So it is
 * slightly associated with the User Controller (userController.js), yet is kept distinct for clarity of functions.
 *
 *
 */
angular.module('chemGeno')
//Stating that this is a controller as well as the fact that this takes in certain information.
.controller('userDialogController', ['$scope', '$mdDialog', 'loginService', 'registerService', '$mdToast',
    function($scope, $mdDialog, loginService, registerService, $mdToast) {
      $scope.master = {};
      //Registered user is initialize to be empty.
      $scope.registerUser = {};
      //Login for the users is initialized to empty.
      $scope.loginUser = {};
      //True upon recieving an error for login request
      $scope.invalidLogin = false;
      //True if user clicks the registration button
      $scope.registration = false;
      // start this as true so that we get to the login screen
      $scope.login = true;
      //True upon recieving an error for a registration request
      $scope.invalidRegistration = false;
      //True upon sucessfuling posting a new user -- sets html logic to display
      //a message about registration process
      $scope.successRegistration = false;


      $scope.submitLogin = function(loginUser) {
        var promise = loginService.login(loginUser);
        promise.then(function(res) {
          console.log(res.data);
          console.log('sucessful login: ' + res.data.user.email);
          console.log('auth token: ' + loginService.getAuthToken())
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
          console.log('success registration');
          console.log(res);
          $scope.registrationConfirmation();
        }, function(error){
          console.log('error in registration');
          console.log(error);
          $scope.invalidRegistration = true;
          $scope.registerUser = angular.copy($scope.master);
        })
      };

      $scope.registrationConfirmation = function() {
        $mdDialog.cancel();
        $mdToast.show(
          $mdToast.simple()
          .textContent("We'll contact you at " + $scope.registerUser.email + " upon account approval!")
          .position('top right')
          .hideDelay(3000)
        );
      };

      $scope.cancelLogin = function() {
        $mdDialog.cancel();
        $scope.loginUser = angular.copy($scope.master); //revert the login user to the value of the master variable.
      };


      $scope.cancelRegistration = function() {
        $mdDialog.cancel();
        $scope.registerUser = angular.copy($scope.master); //revert register user to value of the master variable.
      };

      // changes UI state to transition to the registration view
      $scope.toRegistrationView = function() {
        $scope.login = false;
        $scope.invalidLogin = false; //No invalid login.
        $scope.invalidRegistration = false; //No invalid registration.
        $scope.registration = true; //Registration is confirmed, set to true.
      }
}]);
