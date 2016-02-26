'use strict';

/* Controllers

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});*/

angular.module('chemGeno')

    .controller('searchController', ['$scope',
        function($scope) {
            /**function($scope) {
            $scope.getName = function() {
                return 'John Doe';
            };**/
            $scope.phones = [
                {'name': 'Todd L. Lowary',
                    'snippet': 'University of Alberta'},
                {'name': 'Ole Hindsgaul',
                    'snippet': 'University of Alberta'},
                {'name': 'David R. Bundle',
                    'snippet': 'University of Alberta'},
                {'name': 'Morten Meldel',
                    'snippet': 'Carlsberg Laboratory'},
                {'name': 'Wei Shi',
                    'snippet': 'University of Arkansas'},
                {'name': 'Raymond U. Lemieux',
                    'snippet': 'University of Alberta'},
                {'name': 'Clinton E. Ballou',
                    'snippet': 'University of California, Berkeley'},
                {'name': 'James Baddiley',
                    'snippet': 'Nottingham University'},
                {'name': 'Harold J. Jennings',
                    'snippet': 'National Research Council of Canada'},
                



            ];
            $scope.phone = "hi";

        }]);
