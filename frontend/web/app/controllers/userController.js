/**
 * @module userController
 * @class muserController
 * @author Steven Myers
 * The user controller is located here, that handles the affairs dealing with the users of the application
 * working with the application.
 */

angular.module('chemGeno')
.controller('userController', ['$scope','$mdMedia', '$mdDialog', 'loginService',
  function($scope, $mdMedia, $mdDialog, loginService) {
    $scope.currentUser = {};


    // https://github.com/angular/material/issues/1413 passing stuff to dialog
    /**
     * This method when invoked will log in a user.
     * // https://github.com/angular/material/issues/1413 passing stuff to dialog
     * @param $event An angular event object.
     * @method login
       */
    $scope.login = function($event) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'userDialogController',
        templateUrl: '/app/views/userDialog.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });

      /**
       * This method is an angular method that will watch the current state of the application.
       *
       * @method $watch
       */
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    /**
     * This method when invoked will query the login service and see if the user is or is not logged into the
     * application :)
     *
     * @returns {boolean}
     * @method showLogin
       */
    $scope.showLogin = function() {
      return !loginService.userLoggedIn();
    };

    /**
     * This method when invoked will show the user to the current controller when looking through the login service.
     *
     * @returns {boolean} true/false
     * @method showUser
       */
    $scope.showUser = function() {
      return loginService.userLoggedIn();
    };

    /**
     * Obtains the username from the backend of the application through the login service :)
     *
     *
     * @returns {*}
     * @method getUsername
       */
    $scope.getUsername = function() {
      if (loginService.userLoggedIn()) {
        return loginService.getUser().user.email;
      }
      return '';
    };

    /**
     * This function will invoke the login service's logout function and then it will log them out.
     *
     * @method logout
     */
    $scope.logout = function() {
      loginService.logout();
    };

    /**
     * This method when invoked will query the loginservice and see if the currently logged in user is or is not
     * an administrator of this webapplication.
     *
     * @method isAdmin
     */
    $scope.isAdmin = function() {
      return loginService.isAdmin();
    }
}]);
