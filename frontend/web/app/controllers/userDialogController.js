/**
 * @module userDialogController
 * @class userDialogController
 * @author Steven Myers
 *  Controller for the User Dialogue
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


      /**
       * This method when invoked will submit the login credentials ( a single object passed into this method) to the
       * backend to check if they are valid or not when invoekd.
       *
       * @param loginUser an object of username and password credentials.
       * @method submitLogin
         */
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


      /**
       * This method will be invoked when we have a user that wants to register for the webapplication :)
       * This takes in a registered user object (a username and password combo object) and then will send this
       * object to the backend through the services and then either confirms or rejects the login.
       *
       * @param registerUser A username and password combo for a novel user.
       * @method submitRegistration
         */
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

      /**
       * This method when invoked will confirm the registration of the user.
       * @method registrationConfirmation
       */
      $scope.registrationConfirmation = function() {
        $mdDialog.cancel();
        /*
        when/if the app is extended to provide mailer support one should
        uncomment this line.
        $mdToast.show(
          $mdToast.simple()
          .textContent("We'll contact you at " + $scope.registerUser.email + " upon account approval!")
          .position('top right')
          .hideDelay(3000)
        );
        */
      };

      /**
       * Cancel the login of a user
       * @method cancelLogin
       */
      $scope.cancelLogin = function() {
        $mdDialog.cancel();
        $scope.loginUser = angular.copy($scope.master); //revert the login user to the value of the master variable.
      };


      /**
       * Cancel the registration of the user.
       * @method cancelRegistration
       */
      $scope.cancelRegistration = function() {
        $mdDialog.cancel();
        $scope.registerUser = angular.copy($scope.master); //revert register user to value of the master variable.
      };

      /**
       * Method that will go to the registration view
       * @method toRegistrationView
       */
      // changes UI state to transition to the registration view
      $scope.toRegistrationView = function() {
        $scope.login = false;
        $scope.invalidLogin = false; //No invalid login.
        $scope.invalidRegistration = false; //No invalid registration.
        $scope.registration = true; //Registration is confirmed, set to true.
      }
}]);
