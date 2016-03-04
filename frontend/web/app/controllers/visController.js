angular.module('chemGeno')
.controller('visController', ['$scope',
function($scope) {
  // current window dimensions
  $scope.windowWidth = window.innerWidth;
  $scope.windowHeight = window.innerHeight;

  $scope.estimatedVisW = 0;
  $scope.estimatedVisH  = 0;

  // estimates the dimensions of the vis flexbox
  // not perfect but < 10% error
  $scope.estimateDimensions = function() {
    // #searchContainer.min-height: 80vh;
    $scope.estimatedVisH = 0.8*$scope.windowHeight;
    $scope.estimatedVisW = 0.7*$scope.windowWidth - 0.02*$scope.windowWidth - 50;
  };

  $scope.estimateDimensions();
}]);
