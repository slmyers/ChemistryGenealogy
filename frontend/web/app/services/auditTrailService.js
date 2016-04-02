




angular.module('chemGeno')
    .service('auditTrailService', function($q, $http, $state, loginService, urlService){




        var obtainInformationFromBackEnd = function() {
            var d = $q.defer();
            return $http({
                header: 'Content-Type: application/json',
                method: 'GET',
                url: urlService.baseUrl() + 'api/audit_trail',
            }).success(function (resp) {
                console.log('AUDIT TRAIL SERV SUCCESS!')
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
