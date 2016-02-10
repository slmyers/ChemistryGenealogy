// web token stuff not done yet

angular.module('chemGeno')
.controller('loginController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
          
}]);
