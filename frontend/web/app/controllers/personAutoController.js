/**
 * @module personAutoController
 * @class personAutoController
 * @author Steven Myers
 * Deals with the automatic updating and searching for the people supplied into the query string provided
 * through the search bar at the top of the main html file.
 */
angular.module('chemGeno')
.controller('personAutoController', ['$scope', 'autoService', 'searchService', '$state', '$q',
function($scope, autoService, searchService, $state) {
  $scope.selectedItem;
  $scope.searchText = '';

  $scope.selectedItemChange = function selectedItemChange(item) {
    searchService.executeSearch('id', item.id);
  };

  /**
   * This method when invoked will search upon entry.
   * @method searchOnEnter
   */
  $scope.searchOnEnter = function searchOnEnter() {
    console.log('searchOnEnter: ' + $scope.searchText);
    /* this loads the data into searchService as searchResult */
    searchService.executeSearch('name', $scope.searchText);
  }

  /**
   * Given a name, this method will then query the application with the name and find any results :)
   *
   * @param name The name of a person to be queried by the application.
   * @method queryNameSearch
   * */
  $scope.queryNameSearch = function(name) {
    return autoService.autoPerson(name);
  }
}]);
