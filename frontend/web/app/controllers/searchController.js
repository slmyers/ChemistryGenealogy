angular.module('chemGeno')

    .controller('searchController', ['$scope',
        function($scope) {
            $scope.people = [
                {'name': 'Todd L. Lowary',
                    'institution': 'University of Alberta'},
                {'name': 'Ole Hindsgaul',
                    'institution': 'University of Alberta'},
                {'name': 'David R. Bundle',
                    'institution': 'University of Alberta'},
                {'name': 'Morten Meldel',
                    'institution': 'Carlsberg Laboratory'},
                {'name': 'Wei Shi',
                    'institution': 'University of Arkansas'},
                {'name': 'Raymond U. Lemieux',
                    'institution': 'University of Alberta'},
                {'name': 'Clinton E. Ballou',
                    'institution': 'University of California, Berkeley'},
                {'name': 'James Baddiley',
                    'institution': 'Nottingham University'},
                {'name': 'Harold J. Jennings',
                    'institution': 'National Research Council of Canada'},
                {'name': 'Harold J. Jennings',
                    'institution': 'National Research Council of Canada'},
                {'name': 'Harold J. Jennings',
                    'institution': 'National Research Council of Canada'},
                {'name': 'Harold J. Jennings',
                    'institution': 'National Research Council of Canada'},
                {'name': 'Harold J. Jennings',
                    'institution': 'National Research Council of Canada'}



            ];

        }]);
