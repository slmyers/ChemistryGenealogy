/**
 * @module personAutoController
 * @class personAutoController
 */
angular.module('chemGeno')
.controller('personAutoController', ['$scope', 'autoService', 'searchService', '$state',
function($scope, autoService, searchService, $state) {
  $scope.selectedItem;
  $scope.searchText = '';

  /**
   *  @function myFunction stuff and more stuff
   *  @memberof personAutoController
   *  @instance
   */
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
