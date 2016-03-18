/**
 * @module userController
 * @class muserController
 *
 * The user controller is located here, that handles the affairs dealing with the users of the application
 * working with the application.
 */

angular.module('chemGeno')
.controller('userController', ['$scope','$mdMedia', '$mdDialog', 'loginService',
  function($scope, $mdMedia, $mdDialog, loginService) {
    $scope.currentUser = {};
    // https://github.com/angular/material/issues/1413 passing stuff to dialog
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

      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    $scope.showLogin = function() {
      return !loginService.userLoggedIn();
    };

    $scope.showUser = function() {
      return loginService.userLoggedIn();
    };

    $scope.getUsername = function() {
      if (loginService.userLoggedIn()) {
        return loginService.getUser().user.email;
      }
      return '';
    };

    $scope.logout = function() {
      loginService.logout();
    };

    $scope.isAdmin = function() {
      return loginService.isAdmin();
    }
}]);
