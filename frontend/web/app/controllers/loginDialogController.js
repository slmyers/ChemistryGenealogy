angular.module('chemGeno')
.controller('loginDialogController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.submit = function(user) {
    console.log(user);
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
}]);
