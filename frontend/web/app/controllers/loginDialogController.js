angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', 'loginService',
function($scope, $mdDialog, loginService) {
  $scope.master = {};

  $scope.submit = function(user) {
    loginService.login(user);
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
    $scope.user = angular.copy($scope.master);
  };
}]);
