/**
 * Service for the view page of our application.
 *
 * Involved with making it so that the view page can retrieve the data from the backend to display.
 */




angular.module('chemGeno')
.service('viewService', function($q, $http, $state, loginService) {

        var obtainInformationFromBackEnd = function(idObj) {
            var d = $q.defer();
            return $http({
                header: 'Content-Type: application/json',
                method: 'GET',
                url: 'http://localhost:3000/api/aggregated/'+ idObj.id.toString(),
            }).success(function (resp) {
                console.log('VIEW SUCCESS!')
                console.log(resp)
                d.resolve(resp);
            }).error(function (resp) {
                console.log(resp);
                d.reject(resp.error);
            });
            return d.promise;
        };


        return{
            obtainInformationFromBackEnd: obtainInformationFromBackEnd
        };
    });
