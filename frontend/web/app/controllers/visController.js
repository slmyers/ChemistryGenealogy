/**
 * Controller for the Visualizations
 *
 * Status: CONTROLLER
 * Associated files:
 *
 * The visualization part of our application has this controller which is going to facilitate the process of
 * representing the visuals of the groupings of nodes and vertices to the user in our application.
 *
 */

angular.module('chemGeno')
//Stating that this is a controller as well as the fact that this takes in certain information.
.controller('visController', ['$scope', 'searchService',
    function($scope, searchService) {

      //Maintain a list of the results from the search done.
      $scope.searchResults = [];

      //Assign the search variable the value of the function getMockData in the searchService.js.
      //Which is at present a list of mock data.
      $scope.search = searchService.getMockData();

        /**
         * Function that when evoked will take in a piece of data and then post the data onto the console.
         */
      $scope.search.then(function (data){
        console.log(data);
      }, function(error) {
        console.log(error);
      });
}]);
