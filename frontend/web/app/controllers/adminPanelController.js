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
    .controller('adminPanelController', ['$scope', 'adminPanelService', '$mdDialog', '$mdMedia',
        function($scope, adminPanelService, $mdDialog, $mdMedia) {

            $scope.mockChangesObject = {
               changesList: [
                   {
                       type: 'New Submission',
                       userId: '1'
                   },
                   {
                       type: 'Edit Submission',
                       userId: '2239'
                   }
               ],

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
