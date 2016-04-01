/**
 * Edit Service
 *
 * Status: SERVICE
 * Associated files: vis controller
 *
 */

angular.module('chemGeno')
    .service('editService', function($q, $http, $state, loginService) {

        /**
         * Pass some param like name or id, and that will obtain all information I need. May need to parse it all.
         * @params id Can be a name or some numerical id number.
         */

        var obtainUserInformationFromBackEnd = function(id) {
            var d = $q.defer();
            return $http({
                header: 'Content-Type: application/json',
                method: 'GET',
                url: 'http://localhost:3000/api/aggregated/' + id,
                data: id //Sending this i+d as a json with the ID in it.
            }).success(function (resp) {
                d.resolve(resp);
            }).error(function (resp) {
                console.log(resp);
                d.reject(resp.error);
            });
            return d.promise;
        };

            //Get the thing, populate fields in edit page with this information
            //Then difficult part is making a change to degree, may want to just post that change to degree route.
            //Could do some sort of iteration.
            //Have to determine that only the X changed. Need to be authenticated to run any of these.
            //


            //send a get request to aggregated to there.
            //send an update request to aggregated to update the data. Just say they updated 1 degree, then change data
            //send update with the ID with the update object, and then the updater.............
            //Parse through it, see this is degree object, and update this.
            //I will get swamped with a list of mentorships and in those mentorships they will have name id start inst
            //

            //Update: Say they update degree, may make it a very specific button.
            //Then button press, package the thing and then send it to aggregated controller to some update route
            //or some post route. And then they will iterate over this and update each thing in there. Won't be
            //too bad!


            /**
             * This service when called will PUT the edited data object onto the aggregated url, sending it to
             * the backend to be parsed and the modifications made in the server.
             *
             * @param modifications A specialized object of the modifications
             * @param idObj is the id of the current peep.
             * @returns {*} A promise of the event occurance.
             */
            var sendEditedData = function(modifications, idObj){
                var d = $q.defer();
                console.log(modifications.name);
                console.log(idObj)
                var token = loginService.getAuthToken(); //Obtain the authentication token from the login service.
                return $http({
                        headers: {
                            "Content-Type": "application/json;charset=utf-8'",
                            "Authorization": token
                        },
                    method: 'PUT',
                    url: 'http://localhost:3000/api/aggregated/' + idObj.id.toString(),
                    data: {
                        name: modifications.name,
                        id: modifications.id,
                        approved: modifications.approved,
                        position: modifications.currentPositionTitle,
                        institution: modifications.currentInstitutionName,
                        degree: modifications.degreeInformation,
                        postdoc: modifications.postDocInformation
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
         * This is just needed for the service to actually work. Just standard notation.
         */
            return  {
                obtainUserInformationFromBackEnd: obtainUserInformationFromBackEnd,
                sendEditedData:sendEditedData
            };




    });
