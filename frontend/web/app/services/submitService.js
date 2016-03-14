/**
 * Search Service
 *
 * Status: SERVICE
 * Associated files: vis controller
 *
 */

angular.module('chemGeno')
    .service('submitService', function($q, $http, $state, loginService){


            /**
             * Don't ever call without a submitfileobject. Please :)
             * @param submitFileObject
             * @returns {*}
             */
        var sendSumbitObjectToBackend = function(submitFileObject){
            var d = $q.defer();
            var token = loginService.getAuthToken();
            return $http({
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": token
                },
                method: 'POST',
                url: 'http://localhost:3000/api/aggregated',
                data: {
                    name: submitFileObject.name,
                    position: submitFileObject.currentPositionTitle,
                    institution: submitFileObject.currentInstitutionName,
                    degree: submitFileObject.degreeInformation,
                    postdoc:submitFileObject.postDocInformation
                    }
            }).success(function(resp) {
                d.resolve(resp);
                console.log(resp);
            }).error(function(resp) {
                console.log(resp);
                d.reject(resp.error);
            });
            return d.promise;
        };


        /**
         * Return block, as a javascript object. This reveals these functions as being public, anything not listed
         * is considered private.
         */

        return  {
            sendSumbitObjectToBackend: sendSumbitObjectToBackend
        };

    });

//
//var sendSumbitObjectToBackend = function(submitFileObject){
//    //Make deferrable.
//    var d = $q.defer(); //This calls promise library. So this is promise.defer, to defer this result.
//
//    //make http request.
//    return $http({
//        //Says I am sending a JSON object.
//        header: 'Content-Type: application/json',
//
//        //Depends on their route on the backend.
//        //Thing controller can have a thing called index, send a get request to thing, then it will trigger
//        //that index method automatically.
//        //Method = they do a ray-crouts(no)? (Their end. SO RAKE ROUTES. Rails will analyze routes.
//        //^^ used to coordinate with their backend.
//        //This should have an alias like create or new, so probably a post or put. Post/put are symantic variations.
//        method: 'POST',
//
//        //Send this to the aggregate (THEIR aggregateController). We'll check the rake routes and pin point it.
//        //Something like aggregate.
//        url: 'http://localhost:3000/aggregated',
//
//        //This is where I structure the data. Could just send the submitfileokect.
//        data: submitFileObject
//    }).success(function(resp) {
//        d.resolve(resp);
//    }).error(function(resp) {
//        console.log(resp);
//        d.reject(resp.error);
//
//        //Invokes an error from the promise. Do promise.then and give it one for handling
//        //success nd the other for handling errors.
//        //Promise library = $q, using it's API.
//
//
//    });
//    return d.promise;
//
//
//
//
//};
