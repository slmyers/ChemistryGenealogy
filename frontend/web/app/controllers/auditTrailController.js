/**
 * @module auditTrailController
 * @class auditTrailController
 *
 * Responsible for every functionality given by the administrator panel for the frontend.
 */

angular.module('chemGeno')
    .controller('auditTrailController', ['$scope', 'auditTrailService', '$state',
        function($scope, auditTrailService, $state) {


            /**
             * This function is called at the very start of the audit trail, this obtains the information from
             * the backend and then associates it with the $scope.data object, which will be unpacked later.
             *
             * @method unlockObject
             */
            $scope.unlockObject = function(){
                var promise = auditTrailService.obtainInformationFromBackEnd();
                promise.then(function(resp){
                    $scope.data = resp.data;
                }, function(error){
                    console.log("unable to retrive information about person: ");
                });
            };
            $scope.unlockObject();



            //Object I can expect from the backend.
            //This is mainly used for testing and early development of this page. :)
            $scope.mockObject ={
                "edits":
                    [
                    {
                        "changes":
                        {
                            "mentor_id":[4,3]},
                             "date":"2016-03-17T12:09:49.963Z",
                             "type":"Mentorship",
                             "person_id":1
                    },
                    {
                        "changes":
                        {
                            "person_id":[4,9]},
                            "date":"2016-03-17T12:07:51.898Z",
                            "type":"Supervision",
                            "person_id":4
                    },
                    {

                        "changes":
                        {
                        "person_id":[1,4]
                        },
                        "date":"2016-03-17T12:03:09.841Z",
                        "type":"Supervision",
                        "person_id":1
                    },
                    {
                        "changes":
                        {
                            "supervisor_id":[3,2]
                        },
                        "date":"2016-03-17T11:58:22.087Z",
                        "type":"Supervision","person_id":1
                    },

                    {
                        "changes":
                        {
                            "name":
                                ["todd lowary","Connor"]},
                        "date":"2016-03-17T11:55:13.521Z",
                        "type":"Person",
                        "person_id":1
                    }
                ]
            };


            /**
             * Return to the main page (search page) of this application when the button is pressed.
             *
             * @method goBackToMain
             */
            $scope.goBackToMain = function () {
                if ($state.$current.name !== 'main.search') {
                    $state.go('main.search');
                }

            };


        }]);
