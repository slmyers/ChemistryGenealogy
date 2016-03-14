/**
 * Controller for the Submission page.
 *
 * Status: CONTROLLER
 * Associated files: submit.html
 *
 * The submission page is going to be the core of where the users will be able to supply information to begin a new
 * page for a given particular user. This page is going to be essentially a massive collection of information that
 * we will be inserting into the system.
 *
 * Things that we're collecting include basic information like:
 * -first name
 * -last name
 * -degree type
 * -postdoc postings
 * -etc
 *
 */


angular.module('chemGeno')

    //Stating that this is a controller for this project.
    .controller('adminPanelController', ['$scope', 'adminPanelService', '$mdDialog', '$mdMedia', '$location',
        function($scope, adminPanelService, $mdDialog, $mdMedia, $location) {

            $scope.mockChangesObject = {
                //List of all of the changes made in the application.
               changesList: [
                   {
                       person: 'personname 1',
                       title: 'title 1',
                       institution: 'instituttion 1',
                       postdoc :[{
                           pdStartYear: 2078, pdSupervisor: "the cheese goddess", pdInstitution: "NeverEverLand", pdEndYear: "0007"
                       }],

                       degree:[{
                           year: "2973", supervisor: "Cheese King", institution: "University of NeverEverLand", type:  "Doctorate"

                       }]
                   },
                   {
                       person: 'onion knight',
                       title: 'onion knight (of course)',
                       institution: 'onion knight... academy...?',
                       postdoc: 'c2',
                       degree: 'd2',
                       degree_Supervision: 'e2'
                   }
               ],

                //List for all newly registered accounts.
                newUsersList: [
                    {
                        username: "Username1",
                        password: "Password1",
                        email: "email1"
                    },
                    {
                        username: "Username2",
                        password: "Password2",
                        email: "email2"
                    },
                    {
                        username: "Username3",
                        password: "Password3",
                        email: "email3"
                    }
                ]


            };


            /**
             * Mock object for what I am sending to the backend from the admin panel page. (INFORMATION.)
             */

            $scope.mockReturnObject = {
                uniqueID: "10281921", //String? Int? Whatever you guys send me! Returning it for identification.
                status: "accepted" //User hit accept button, commit changes.
            };

            $scope.mockReturnObject2 = {
                uniqueID: "991", //String? Int? Whatever you guys send me! Returning it for identification.
                status: "rejected" //User hit the reject button, discard changes.
            };

            /**
             * Mock object for what I am sending to the backend from the admin panel page. (USERS.)
             */

            $scope.mockReturnObject3 = {
                uniqueID: "usr91", //unique identifier
                status: "accepted" //accepted the new user
            };

            $scope.mockReturnObject4 = {
                uniqueID: "usr71827818291", //unique identifier
                status: "rejected" //rejected the new user
            };



            $scope.goBackToMain = function(){
                $location.path('search'); // path not hash

            };

            //For information modification requests.
            $scope.viewInformationModRequests = false;

            $scope.showInformationModRequests = function(){
              $scope.viewInformationModRequests = true;
            };

            $scope.hideInformationModRequests = function(){
                $scope.viewInformationModRequests = false;
            };

            $scope.rejectInformationModRequest = function(item){
                console.log("Reject Request made on item" + item);
            };

            $scope.acceptInformationModRequest = function(item){
                console.log("Accept Request made on item" + item);

            };


            //For new user requests.
            $scope.viewNewUserRequests = false;

            $scope.showNewUserRequests = function(){
                $scope.viewNewUserRequests = true;
            };

            $scope.hideNewUserRequests = function(){
                $scope.viewNewUserRequests = false;
            };

            $scope.rejectNewUserRequest = function(user){
                console.log("Reject Request made on user" + user.username);
            };

            $scope.acceptNewUserRequest = function(user){
                console.log("Accept Request made on user" + user.username);

            };



            //Attempt at getting a dialogue working to show detailed information...
            $scope.status = '  ';
            $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            $scope.showAdvanced = function(ev, item) {


                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: '/app/views/adminPanelDetailed.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true,
                        fullscreen: useFullScreen
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
                $scope.$watch(function() {
                    return $mdMedia('xs') || $mdMedia('sm');
                }, function(wantsFullScreen) {
                    $scope.customFullscreen = (wantsFullScreen === true);
                });
            };





            function DialogController($scope, $mdDialog) {
                $scope.leItem = $scope.itemDetailsItem;
                $scope.hide = function() {
                    $mdDialog.hide();
                };
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };

            }


            /**
             * Functions that are associated with the detailed administrator page...
             */

            //Mock object for right now at this point in time.





        }]);
