angular.module('chemGeno')
.controller('personAutoController', ['$scope', 'autoService', 'searchService',
function($scope, autoService, searchService) {
  $scope.selectedItem;
  $scope.searchText = '';

  $scope.selectedItemChange = function selectedItemChange(item) {
    searchService.executeSearch(item.name);
  };

  $scope.searchOnEnter = function searchOnEnter() {
    console.log('searchOnEnter: ' + $scope.searchText);
    /* this loads the data into searchService as searchResult */
    searchService.executeSearch($scope.searchText);
  }

  $scope.queryNameSearch = function(name) {
    return autoService.autoPerson(name);
  }
}]);