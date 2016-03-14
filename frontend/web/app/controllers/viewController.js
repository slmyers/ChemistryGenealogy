
angular.module('chemGeno')

    //Stating that this is a controller for this project.
    .controller('viewController', ['$scope', '$state', 'viewService', '$location',
        function($scope, $state, viewService, $location) {


            /**
             * Fake mock object that represents the object that this page expects to recieve to display to the
             * users of this application.
             *
             * @type {{name: string, currentPositionTitle: string, currentInstitutionName: string, postDocInformation: *[], degreeInformation: *[]}}
             */
            $scope.mockObjectRecieved = {

                name: "Cheese Knight",
                currentPositionTitle: "Honorable Knight of Cheese",
                currentInstitutionName: "NeverEverLand",
                postDocInformation:[{
                    pdStartYear: 2078, pdSupervisor: "the cheese goddess", pdInstitution: "NeverEverLand", pdEndYear: "0007"
                }],

                degreeInformation:[{
                    year: "2973", supervisor: "Cheese King", institution: "University of NeverEverLand", type:  "Doctorate"

                }]
            };

            //Keep the postdoc and degree information collapsed when the users first arrive at the page!
            $scope.postDocVisibility = false;
            $scope.degreeInfoVisibility = false;

            //Assign the variables to the mock data (for now at least).
            $scope.firstName = $scope.mockObjectRecieved.name.split(" ")[0];
            $scope.lastName = $scope.mockObjectRecieved.name.split(" ")[1];
            $scope.currentPositionTitle = $scope.mockObjectRecieved.currentPositionTitle;
            $scope.currentInstitutionName = $scope.mockObjectRecieved.currentInstitutionName;
            $scope.degreeInformation = $scope.mockObjectRecieved.degreeInformation;
            $scope.postDocInformation = $scope.mockObjectRecieved.postDocInformation;

            $scope.unlockObject = function(){


            };


            /**
             * Function called when we want to change the current page to the edit page for the current
             * batch of information.
             */
            $scope.invokeEditPage = function(){
                console.log("Edit button pressed!");

            };


            $scope.goBackToMain = function(){
                    $location.path('search'); // path not hash

            };

            $scope.showDegreeInfo = function(){
                $scope.degreeInfoVisibility = true;
            };

            $scope.showPostDocInfo = function(){
                $scope.postDocVisibility = true;
            };

            $scope.hideDegreeInfo = function(){
                $scope.degreeInfoVisibility = false;
            };

            $scope.hidePostDocInfo = function(){
                $scope.postDocVisibility = false;
            }



        }]);