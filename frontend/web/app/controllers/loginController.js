// web token stuff not done yet


angular.module('chemGeno')
.controller('loginController', ['$scope','$mdMedia', '$mdDialog', function($scope, $mdMedia, $mdDialog) {
  // https://github.com/angular/material/issues/1413 passing stuff to dialog
  $scope.login = function($event) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: 'loginDialogController',
      templateUrl: '/app/views/loginDialog.html',
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
}]);
