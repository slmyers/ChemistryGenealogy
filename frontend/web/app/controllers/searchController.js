angular.module('chemGeno')

    .controller('searchController', ['$scope','simpleSearchService',
        function($scope, simpleSearchService) {
            /* load search results */
            $scope.people = simpleMockData;



        }]);