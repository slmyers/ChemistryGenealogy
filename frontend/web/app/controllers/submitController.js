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
    .controller('submitController', ['$scope', 'submitService',
        function($scope, submitService) {

         //POSTDOC TABS:
         // Basic tabs "list" like structure that will hold together all of the data in an appropriate format.
         // Tabs is part of the model as described immediately below:
         // {postDocID, postDocDates, postDocSupervisor, postDocInstitution}
            // Isolate start and end dates.

         var postDocTab = [
             { postDocID: 1, postDocDates: '1993-1995', postDocSupervisor: 'David Bundle',
                 postDocInstitution: 'University of Alberta'},
             { postDocID: 2, postDocDates: '1996-1996', postDocSupervisor: 'Morten Meldel',
                 postDocInstitution: 'Carlsberg Laboratory'}
         ],
             selectedPD = null,
             previousPD = null,

         //DEGREE INFO TABS:
         //For our purposes the degree information is used to compile any advanced degrees that a user may have.
         //I elected to use tabs for this as people may have different supervisors for masters vs. PhD or even
         //multiple PhD/masters degrees from various fields. (Eg: Perhaps Chemistry AND Criminal Justice?)
         //Worry less about ID.
         degreeInfoTab =[
             { degreeInfoID: 1, degreeInfoYear: 1993, degreeInfoSupervisor: 'Ole Hindsgaul', degreeInfoInstitution: 'University of Alberta'}

         ];

            //Postdoc Variables.
            $scope.postDocTabs = postDocTab; //Formally assigning the list above to the scope tab variable.
            $scope.selectedIndex = 2; //Index that the tabs start at.
            $scope.postDocID = 3; //Only set to 3 here for the sample data. Set back to 1 for release.

            //Degree Info variables.
            $scope.degreeInfoTabs = degreeInfoTab; //Formally assigning the list above to the scope tab variable.
            $scope.degreeInfoSelectedIndex = 1; //Index that the tabs start at.
            $scope.degreeInfoID = 2; //Only set to 3 here for the sample data. Set back to 1 for release.


            /** POSTDOC FUNCTION.
             * This function when invoked will take the current and then the old tab and then it will combine
             * the data together in such a way that we have the previous now equal to the selected, and then
             * index into the "tabs" list with the current value.
             *
            $scope.$watch('selectedIndex', function(current, old){
                previousPD = selectedPD;
                selectedPD = postDocTab[current];
                if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previousPD.title + '!');
                if ( current + 1 )                $log.debug('Hello ' + selectedPD.title + '!');
            });
             */

            /** POSTDOC FUNCTION.
             * This function will add a new tab to the set of tabs that we currently have.
             *
             * @param pdYearStart The dates of the start of the postdoc appointment.
             * @param pdYearEnd The date of the end of the postdoc appointment.
             * @param pdSupervisor The supervisor of the postdoc appointment.
             * @param pdInstitution The institution of the postdoc appointment.
             */
            $scope.addPDInfo = function (pdYearStart, pdYearEnd, pdSupervisor, pdInstitution) {
                //view = view || title + " Content View";
                var pdID = $scope.postDocID++; //Increment global PostDocID with addition.
                postDocTab.push({ postDocID: pdID, postDocDates: pdDate, postDocSupervisor: pdSupervisor, postDocInstitution: pdInstitution, disabled: false});
            };

            /** POSTDOC FUNCTION
             * This function when evoked will remove the selected tab from the screen.
             * @param tab The tab to be removed.
             */
            $scope.removePDTab = function (tab) {
                $scope.postDocID--; //Decrement global postDocID with removal.
                var index = postDocTab.indexOf(tab);
                postDocTab.splice(index, 1);
            };






            //degreeInfoYear: 1993, degreeInfoSupervisor: 'Ole Hindsgaul', degreeInfoInstitution: 'University of Alberta'

            /** DEGREE INFO FUNCTION.
             * This function when invoked will take the current and then the old tab and then it will combine
             * the data together in such a way that we have the previous now equal to the selected, and then
             * index into the "tabs" list with the current value.
             *
            $scope.$watch('degreeInfoSelectedIndex', function(current2, old2){
                previous = selected;
                selected = degreeInfoTab[current2];
                if ( old2 + 1 && (old2 != current2)) $log.debug('Goodbye ' + previous.title + '!');
                if ( current2 + 1 )                $log.debug('Hello ' + selected.title + '!');
            });*/

            /** DEGREE INFO FUNCTION.
             * This function will add a new tab to the set of tabs that we currently have.
             *
             * @param diYear The year that the degree was obtained.
             * @param diSupervisor The supervisor who oversaw the degree.
             * @param diInstitution The institution that awarded the degree.
             */
            $scope.addDI = function (diYear, diSupervisor, diInstitution) {
                //view = view || title + " Content View";
                var diID = $scope.degreeInfoID++; //Increment global degreeInfoID with addition.
                degreeInfoTab.push({ degreeInfoID: diID, degreeInfoYear: diYear, degreeInfoSupervisor: diSupervisor, degreeInfoInstitution: diInstitution, disabled: false});
            };

            /** DEGREE INFO FUNCTION
             * This function when evoked will remove the selected tab from the screen.
             *
             * @param tab The tab to be removed.
             */
            $scope.removeDITab = function (tab) {
                $scope.degreeInfoID--; //Decrement global degreeInfoID with removal.
                var index = postDocTab.indexOf(tab);
                degreeInfoTab.splice(index, 1);
            };



            //Set a boolean flag to show or to not show the postdoctoral information
            //Initially false, do not show the postdoc information.
            $scope.postDocVisibility = false;

            /**
             * When invoked will show the postdoc info by setting the flag to true.
             */
            $scope.showPostDocInfo = function(){
                $scope.postDocVisibility = true;
                console.log("called");
            };

            /**
             * When invoked will hide the postdoc info by setting the flag to false.
             */
            $scope.hidePostDocInfo = function(){
                $scope.postDocVisibility = false;
            };


            /**
             * Information regarding the postdoc appointments furnished on the submit page.
             *
             */

            $scope.pdEndYear = null;
            $scope.pdStartYear = null;
            $scope.pdSupervisor = null;
            $scope.pdInstitution = null;

            function PostDocInstance(pdStartYear, pdEndYear, pdSupervisor, pdInstitution)
                {
                    this.pdStartYear = pdStartYear,
                    this.pdEndYear = pdEndYear,
                    this.pdSupervisor = pdSupervisor,
                    this.pdInstitution = pdInstitution
                }



            $scope.postDocInformation = [
                {
                    pdStartYear: "1980", pdEndYear: "1981", pdSupervisor: "Clinton E. Ballou", pdInstitution: "University of California"

                },
                {
                    pdStartYear:"1971", pdEndYear: "1973", pdSupervisor: "Harold J. Jennings", pdInstitution: "National Research Council of Canada"
                }
            ];

            //$scope.imagePath = "/static/img/new-zealand-679068_1280.jpg"
            /**
             * Function evoked when the submit button is hit on the postdoc card on the submit page.
             * Creates a new postDocInstance (object with postdoc data) with the data in the card's fields.
             * Afterwards refreshes the view of the scope.
             *
             * @param pdStartYear Starting year of the postdoc appointment.
             * @param pdEndYear Ending year of the postdoc appointment.
             * @param pdSupervisor Supervisor of the postdoc appointment.
             * @param pdInstitution Institution of the postdoc appointment.
             */
            $scope.addPostDocInstance = function (pdStartYear, pdEndYear, pdSupervisor, pdInstitution) {
                var newPostDocInstance = new PostDocInstance(pdStartYear,pdEndYear,pdSupervisor,pdInstitution);
                $scope.postDocInformation.push(newPostDocInstance);
                console.log("AddPostDocInstance Called on" + $scope.postDocInformation);

                //"Clear" all of the fields.
                pdEndYear = null;
                pdStartYear= "";
                pdSupervisor = "";
                pdInstitution = "";
            };

            $scope.editPostDoc = function(){
              console.log("editPostDoc function called");


            };


            /**
            $scope.clearPostDocFields = function(){
                pdStartYear = "";
                pdEndYear = "";
                pdSupervisor = "";
                pdInstitution = "";
                console.log("clearPostDocFields called! :)");
            }; **/


            /**
             * Function that when invoked will remove the selected postdoc instance from the submit page and
             * the particular individual's object model.
             * @param postDocInstanceIndex of the postDocInformation array that should be removed.
             */
            $scope.removePostDocInstance = function(postDocInstance){
                console.log("removePostDocInstance called with index" + postDocInstance);
                console.log($scope.postDocInformation.length);

                var index = $scope.postDocInformation.indexOf(postDocInstance);
                console.log($scope.postDocInformation.length);
                //Splice out the entry that is desired to be removed.
                $scope.postDocInformation.splice(index,1);
                console.log($scope.postDocInformation);


            };


            /** Degrees Section:
             * This section deals with the cards associated with the degrees a user may have.
             */

            $scope.degreeInformation = [
                {
                    year: "2008", supervisor: "Todd L. Lowry", institution: "University of Alberta", type:  "Doctorate"

                },
                {
                    year:"1980", supervisor: "Raymond U. Lemieux", institution: "University of Alberta", type: "Doctorate"
                }
            ];

            //Set to false to hide the details of the degree info information.
            $scope.degreeInfoVisibility = false;


            /**
             * Shows the degree info information when invoked.
             */
            $scope.showDegreeInfo = function(){
                $scope.degreeInfoVisibility = true;
            };

            /**
             * Hides the degree info information when invoked.
             */
            $scope.hideDegreeInfo = function(){
                $scope.degreeInfoVisibility = false;
            };



            /**
             * Information regarding the postdoc appointments furnished on the submit page.
             *
             */
            $scope.diYear = null;
            $scope.diSupervisor = null;
            $scope.diInstitution = null;
            $scope.diType = null;


            /**
             * Constructor for the DegreeInfoInstance Object.
             * This is the object that holds together the information of a single degree for a particular individual.
             *
             * @param diYear Year of the degree being awarded.
             * @param diSupervisor Supervisor of the degree.
             * @param diInstitution Institution degree was awarded from.
             * @param diType Type of this degree.
             *
             * @constructor
             */
            function DegreeInfoInstance(diYear, diSupervisor, diInstitution, diType)
            {
                this.year = diYear;
                this.supervisor = diSupervisor;
                this.institution = diInstitution;
                this.type = diType;

            }


            /**
             *
             * @param diYear Year of the degree being awarded.
             * @param diSupervisor Supervisor of the degree.
             * @param diInstitution Institution degree was awarded from.
             * @param diType Type of this degree.
             */
            $scope.addDegreeInfoInstance = function (diYear, diSupervisor, diInstitution, diType) {
                var newDegreeInfoInstance = new DegreeInfoInstance(diYear, diSupervisor, diInstitution, diType);
                $scope.degreeInformation.push(newDegreeInfoInstance);
                console.log("AddPostDocInstance Called on" + $scope.degreeInfoInformation);


                //Refresh the view of the scope.
                $scope.$apply();
            };

            /**
             * Removes the object passed in from the individual's degree information.
             *
             * @param degreeInfoInstance The degree that is desired to be removed.
             */
            $scope.removeDegreeInfoInstance = function(degreeInfoInstance){
                console.log("removePostDocInstance called with index" + degreeInfoInstance);
                console.log($scope.postDocInformation.length);

                var index = $scope.degreeInformation.indexOf(degreeInfoInstance);
                console.log($scope.degreeInformation.length);
                //Splice out the entry that is desired to be removed.
                $scope.degreeInformation.splice(index,1);
                console.log($scope.degreeInformation);
            };



            //Order by date descending. <- for the output to the user.

            /**Basic Info Section:
             * This section deals with trivial information collection on the submit page such as first and last names.
             */
            $scope.firstName = null;
            $scope.lastName = null;
            $scope.individualTitle = null;
            $scope.typeOfDegree = null;
            $scope.currentPositionTitle = null;
            $scope.currentInstitutionName = null;
            $scope.Name = null;

            $scope.testBasicInputs = function(){
                console.log($scope.firstName + " " + $scope.lastName + " " + $scope.title
                    + " " + $scope.currentPositionTitle + " " + $scope.currentInstitutionName);
            };




            /** MODEL AND FINAL SUBMISSION
             * This is the model for this submission page.
             * First name, last name, title, degree type, current position title, current institution, postdoc info
             *
             * @type {{usersFirstName: null, usersLastName: null, usersTitle: null, usersDegreeType: null, usersCurrentPositionTitle: null, usersCurrentInstitutionName: null, usersPostDocInfo: *[]}}
             */


            /**
             *  This is the constructor for bundling all of the submission page information into one object.
             *  Called by hitting the final submission button, which evokes a function that plops this together.
             *
             *  Params are self explanitory I'd hope?
             * @param firstName
             * @param lastName
             * @param individualTitle
             * @param typeOfDegree
             * @param currentPositionTitle
             * @param currentInstitutionName
             * @param postDocInformation
             */
            function SubmissionPageModelObject(firstName, lastName, currentPositionTitle,
                        currentInstitutionName, postDocInformation, degreeInformation)
            {
                //Concatenating the first and last name together with a space between for now...
                var concatednatedNames = firstName + " " + lastName;
                this.name = concatednatedNames ;
                this.currentPositionTitle = currentPositionTitle;
                this.currentInstitutionName = currentInstitutionName;

                //Now the arrays of postdoc appointments and degrees.
                this.postDocInformation = postDocInformation;
                this.degreeInformation = degreeInformation;
            }

            $scope.submitPageObject= null;


            /**
             * Function evoked when the final submission button is hit, creates a new model object for the entire
             * submission page.
             */
            $scope.finalSubmitButtonFunction = function(){
                console.log("finalSubmitButtonFunction was called");

                //Create the new object for the submission page.
                var newSubmitObject = new SubmissionPageModelObject($scope.firstName, $scope.lastName,
                    $scope.currentPositionTitle, $scope.currentInstitutionName, $scope.postDocInformation,
                    $scope.degreeInformation);


                $scope.submitPageObject = newSubmitObject;

                //Invoke the services for this submit page to send the submitPageObject.
                console.log($scope.submitPageObject);
                submitService.sendSumbitObjectToBackend($scope.submitPageObject);



                //Debugging and checking out what is going on here.
                console.log(   "name: " + $scope.firstName + " " + $scope.lastName);
                //console.log($scope.lastName);
                console.log(   "currentPositionTitle: " + $scope.currentPositionTitle);
                console.log(   "currentInstName: " + $scope.currentInstitutionName);
                console.log(   "postDocInfo: " + $scope.postDocInformation);


                //Check out the items in the postdoc information list.
                for(var i = 0; i < $scope.postDocInformation.length; i++){
                    console.log($scope.postDocInformation[i]);
                }

                //Check out the items in the degree information list.
                for(var i = 0; i < $scope.degreeInformation.length; i++){
                    console.log($scope.degreeInformation[i]);

                }


            };


            /**
             * Meant to return back to the main.search page, not working though.
             */
            $scope.goBackToMain = function () {
                $location.url('/search');

            };

            /**
             * Function that once it is called will dump all of the information of the object for this submission
             * page!
             */
            $scope.checkOutTHISObject = function(){
                console.log("Here are the results of the object of this page");
                console.log("Yes, this will be large.");

                console.log($scope.submitPageObject);



            }


        }]);


