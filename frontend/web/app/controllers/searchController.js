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

            $scope.joinData = function() {
                var peopleArrayLength = $scope.people.length;
                for (var i = 0; i < peopleArrayLength; i++) {
                    var institutionsArrayLength = $scope.institutions.length;
                    for (var j = 0; j < institutionsArrayLength; j++) {

                        if ($scope.institutions[j].id == $scope.people[i].institution_id) {
                            $scope.people[i].institution_id = $scope.institutions[j].name

                        }

                    }


                }
                return;
            };


        }]);