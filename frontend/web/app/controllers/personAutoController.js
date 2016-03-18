/**
 * @module personAutoController
 * @class personAutoController
 *
 * Deals with the automatic updating and searching for the people supplied into the query string provided
 * through the search bar at the top of the main html file.
 */
angular.module('chemGeno')
.controller('personAutoController', ['$scope', 'autoService', 'searchService', '$state',
function($scope, autoService, searchService, $state) {
  $scope.selectedItem;
  $scope.searchText = '';

  /**
   * Given an item, it will then execute a search upon the item passed into this method.
   *  @function myFunction stuff and more stuff
   *  @memberof personAutoController
   *  @instance
   *  @method selectedItemChange
   */
  $scope.selectedItemChange = function selectedItemChange(item) {
    searchService.executeSearch(item.id);
  };

  /**
   * This method when invoked will search upon entry.
   * @method searchOnEnter
   */
  $scope.searchOnEnter = function searchOnEnter() {
    console.log('searchOnEnter: ' + $scope.searchText);
    /* this loads the data into searchService as searchResult */

    searchService.executeSearch($scope.searchText);
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
