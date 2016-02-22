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
.controller('userDialogController', ['$scope', '$mdDialog', 'loginService', 'registerService',
    function($scope, $mdDialog, loginService, registerService) {
      $scope.master = {};
      //Registered user is initialize to be empty.
      $scope.registerUser = {};
      //Login for the users is initialized to empty.
      $scope.loginUser = {};
      //True upon recieving an error for login request
      $scope.invalidLogin = false;
      //True if user clicks the registration button
      $scope.registration = false;
      //True upon recieving an error for a registration request
      $scope.invalidRegistration = false;

        /**
         * Function associated with navigating through the processes of actually logging in a user from
         * start to finish of this application process.
         *
         * @param loginUser Takes in a user to be logged into the app.
         */
      $scope.submitLogin = function(loginUser) {
        console.log(loginUser);
        var promise = loginService.login(loginUser);
        promise.then(function(res) {
          console.log(res.data);
          console.log('sucessful login: ' + res.data.user.email);
          $scope.invalidLogin = false;
          $mdDialog.cancel();
        }, function(error){
          console.log(error);
          $scope.invalidLogin = true;
          $scope.loginUser = angular.copy($scope.master);
        });
      };

        /**
         * Function associated with navigating through the process of registering a user through our application.
         *
         * @param registerUser Takes in an object of a user to be registered to the app.
         */
      $scope.submitRegistration = function(registerUser) {
        var promise = registerService.register(registerUser);
        promise.then(function(res) {
          console.log('success registration');
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

        /**
         * Function associated with cancellation of the login process for the user.
         */
      $scope.cancelLogin = function() {
        $mdDialog.cancel(); //Hide the current dialogue and break the promise returned from the md.show evocation.
        $scope.loginUser = angular.copy($scope.master); //revert the login user to the value of the master variable.
      };

        /**
         * Function associated with the cancellation of the reigstration process of a new user.
         */
        $scope.cancelRegistration = function() {
        $mdDialog.cancel(); //Hide the current dialogue and break the promise returned from the md.show evocation.
        $scope.registerUser = angular.copy($scope.master); //revert register user to value of the master variable.
      };

        /**
         * When invoked, this function will set a trifecta of boolean flags to state the current state of the app.
         */
      $scope.toRegistrationView = function() {
        $scope.invalidLogin = false; //No invalid login.
        $scope.invalidRegistration = false; //No invalid registration.
        $scope.registration = true; //Registration is confirmed, set to true.
      }
}]);
