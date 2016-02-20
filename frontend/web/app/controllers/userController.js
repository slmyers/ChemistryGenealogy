/**
 * Controller for the User page.
 *
 * Status: CONTROLLER
 * Associated files: loginService.js
 *
 * The user controller is going to be dealing with all general affairs of the users of the application such as login,
 * showing the user name, showing the login, logging out, etc. This is going to be associated across the board with
 * these various features.
 *
 * This is associated with various services to achieve this: loginService.js, registerService.js.
 *
 */

angular.module('chemGeno')
//Stating that this is a controller for this project and stating what it takes in.
    .controller('userController', ['$scope','$mdMedia', '$mdDialog', 'loginService',
        function($scope, $mdMedia, $mdDialog, loginService) {


          //Have the currentuser as nothing for now, until they are logged in.
          $scope.currentUser = {};

          //Have a login function available to be used.
          // https://github.com/angular/material/issues/1413 passing stuff to dialog
          $scope.login = function($event) {

        //Have it so that the login screen has it's own special custom display format.
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

            //For this chunk, information on what the user will have displayed to them as the login is here.
        $mdDialog.show({
          controller: 'userDialogController',
          templateUrl: '/app/views/userDialog.html',
          parent: angular.element(document.body),
          targetEvent: $event,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        });
            /**
             * This function, when invoked, will do something with the screen size. Help me pls. Save me. Pls.
             */
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
          $scope.customFullscreen = (wantsFullScreen === true);
        });
      };

          /**
           * Function evoked which will tell us if the user is logged in or not.
           * @returns {boolean} If the user is (true) or is not (false) logged in.
             */
      $scope.showLogin = function() {
        return !loginService.userLoggedIn();
      };

          /**
           * Basic getter function that will return the value of the user currently logged in.
           */
      $scope.showUser = function() {
        return loginService.userLoggedIn();
     };

          /**
           * Function that will return the username of the user from the login service.
           * @returns {*} An object of the user's username.
             */
      $scope.getUsername = function() {
        if (loginService.userLoggedIn()) {
          //console.log(loginService.getUser());
          return loginService.getUser().user.email;
        }
        return '';
      };

          /**
           * Function that when invoked will call the logout service and log out the user.
           */
      $scope.logout = function() {
        loginService.logout();
      };

}]);

