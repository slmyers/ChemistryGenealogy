angular.module('chemGeno')
.controller('visController', ['$scope', 'searchService',
function($scope, searchService) {
  $scope.searchResults = [];
  $scope.search = searchService.getMockData();
  $scope.search.then(function (data){
    console.log(data);
  }, function(error) {
    console.log(error);
  });
}]);
