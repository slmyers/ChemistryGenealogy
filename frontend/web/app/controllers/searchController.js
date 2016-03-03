angular.module('chemGeno')

    .controller('searchController', ['$scope','simpleSearchService',
        function($scope, simpleSearchService) {
            /* load search results */
            $scope.people = simpleSearchService.people;
            $scope.institutions = simpleSearchService.institutions;


            $scope.getInstitution = function(id) {
                var arrayLength = $scope.institutions.length;
                for (var i = 0; i < arrayLength; i++) {
                    
                    if ($scope.institutions[i].institution_id == id){
                        return $scope.institutions[i].name;
                    }
                }


                return "unknown";
            };


        }]);