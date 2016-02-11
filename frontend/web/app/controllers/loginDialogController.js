angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', 'loginService',
function($scope, $mdDialog, loginService) {
  $scope.master = {};

  $scope.submit = function(user) {
    var promise = loginService.login(user);
    promise.then(function(res) {
        console.log(res);
        $mdDialog.cancel();
        console.log('logged in === ' + loginService.userLoggedIn());
      }, function(error){
        console.log(res);
        $mdDialog.show();
      });
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
    $scope.user = angular.copy($scope.master);
  };
}]);
