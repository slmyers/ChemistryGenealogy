/**
 * @module submitController
 * @class submitController
 *
 * Controller for the Submission page.
 *
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
    .controller('submitController', ['$scope', '$state', 'submitService',
        function($scope, $state, submitService) {

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


            /**
             * SUEPRVISED POSTDOCS SECTION YES THIS IS A MESS HERE BUT IT MUST BE DONE FASTT!!!! AHHHHHHH!!!!!!!!!!!!!
             * @type {*[]}
             */

            $scope.postdocSupervisionVisibility = false;
            $scope.superDocStartYear = null;
            $scope.superDocEndYear = null;
            $scope.superDocInstitution = null;
            $scope.superdocNameOfPerson = null;


            /**
             * Object for SuperDoc
             * @param superDocNameOfPerson
             * @param superDocStartYear
             * @param superDocEndYear
             * @param superDocInstitution
             * @constructor SuperDocInstance
             */
            function SuperDocInstance(superDocNameOfPerson, superDocStartYear, superDocEndYear, superDocInstitution)
            {
                this.superDocNameOfPerson = superDocNameOfPerson,
                    this.superDocStartYear = superDocStartYear,
                    this.superDocEndYear = superDocEndYear,
                    this.superDocInstitution = superDocInstitution
            }


            /**
             * This function is invoked when we want to create a new superdoc object with the parameters supplied
             * to this method, and then it will also put this newly created object into the array of all of the
             * superdoc objects.
             *
             * @param superDocNameOfPerson Person name
             * @param superDocStartYear Start year
             * @param superDocEndYear End year
             * @param superDocInstitution Institution of the supervised postdoc
             */
            $scope.addSuperDocInstance = function(superDocNameOfPerson, superDocStartYear, superDocEndYear, superDocInstitution){
                var newSuperDocInstance = new SuperDocInstance(superDocNameOfPerson, superDocStartYear, superDocEndYear, superDocInstitution);
                $scope.superDocInformation.push(newSuperDocInstance);
                console.log("addSuperDocInstance Called on" + $scope.superDocInformation);


            };


            /**
             * Initialize superDoc array as an empty array. Will hold SuperDoc objects :)!
             * @type {Array}
             */
            $scope.superDocInformation = [ ];


            /**
             * Show the superdoc information
             * @method showSuperDocInfo
             */
            $scope.showSuperDocInfo = function(){
                $scope.postdocSupervisionVisibility = true;
            };

            /**
             * Hide the superdoc information
             *
             * @method hideSuperDocInfo
             */
            $scope.hideSuperDocInfo = function(){
                $scope.postdocSupervisionVisibility = false;
            };


            /**
             * Remove a passed in superdoc object from the superdoc array of superdoc objects.
             *
             * @param superDocInstance A superdoc object
             * @method removeSuperDocInstance
             */
            $scope.removeSuperDocInstance = function(superDocInstance){
                console.log("removeSuperDocInstance called with index" + superDocInstance);
                console.log($scope.superDocInformation.length);

                var index = $scope.superDocInformation.indexOf(superDocInstance);
                console.log($scope.superDocInformation.length);
                //Splice out the entry that is desired to be removed.
                $scope.superDocInformation.splice(index,1);
                console.log($scope.superDocInformation);
            };

            /**
             * SUPERDEGREE SECTION
             * @type {*[]}
             */


            /**
             * Super degree variables.
             * @type {boolean}
             */
            $scope.superDegVisibility = false;

            //
            //$scope.superDegStartYear = null;
            //$scope.superDegEndYear = null;
            //$scope.superDegInstitution = null;
            $scope.superDegNameOfPerson = null;

            /**
             * Construct a super DEGREE object.
             * @param superDegNameOfPerson
             * @param superDegStartYear
             * @param superDegEndYear
             * @param superDegInstitution
             * @constructor SuperDegInstance
             */
            function SuperDegInstance(superDegNameOfPerson)
            {
                this.superDegNameOfPerson = superDegNameOfPerson;
                    //this.superDegStartYear = superDegStartYear,
                    //this.superDegEndYear = superDegEndYear,
                    //this.superDegInstitution = superDegInstitution
            }


            /**
             * Adds a new instance of a superdegree to the arraylist of super degree objects.
             * @param superDegNameOfPerson A name of a superdeg person
             */
            $scope.addSuperDegInstance = function(superDegNameOfPerson){
                var newSuperDegInstance = new SuperDegInstance(superDegNameOfPerson);
                $scope.superDegInformation.push(newSuperDegInstance);
                console.log("addSuperDegInstance Called on" + $scope.superDegInformation);


            };


            /**
             * Shows the superdeg infroamtion
             * @method showSuperDegInfo
             */
            $scope.showSuperDegInfo = function(){
                $scope.superDegVisibility = true;
            };

            /**
             * Hides the superdeg information
             * @method hideSuperDegInfo
             */
            $scope.hideSuperDegInfo = function(){
                $scope.superDegVisibility = false;
            };

            /**
             * Initialize as an empty array, for now. Will be populated with SUPER DEGREE objects.
             * @type {Array}
             */
            $scope.superDegInformation = [ ] ;


            /**
             * Removes the passed in superdegree object from the list of all superdegree objects.
             *
             * @param superDegInstance
             * @method removeSuperDegInstance
             */
            $scope.removeSuperDegInstance = function(superDegInstance){
                console.log("removeSuperDegInstance called with index" + superDegInstance);
                console.log($scope.superDegInformation.length);

                var index = $scope.superDegInformation.indexOf(superDegInstance);
                console.log($scope.superDegInformation.length);
                //Splice out the entry that is desired to be removed.
                $scope.superDegInformation.splice(index,1);
                console.log($scope.superDegInformation);
            };


            /**
             * OTHER STUFFS
             * @type {*[]}
             */

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
             * @method addPDInfo
             */
            $scope.addPDInfo = function (pdYearStart, pdYearEnd, pdSupervisor, pdInstitution) {
                //view = view || title + " Content View";
                var pdID = $scope.postDocID++; //Increment global PostDocID with addition.
                postDocTab.push({ postDocID: pdID, postDocDates: pdDate, postDocSupervisor: pdSupervisor, postDocInstitution: pdInstitution, disabled: false});
            };

            /** POSTDOC FUNCTION
             * This function when evoked will remove the selected tab from the screen.
             * @param tab The tab to be removed.
             * @method removePDTab
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
                //{
                //    pdStartYear: "1980", pdEndYear: "1981", pdSupervisor: "Clinton E. Ballou", pdInstitution: "University of California"
                //
                //},
                //{
                //    pdStartYear:"1971", pdEndYear: "1973", pdSupervisor: "Harold J. Jennings", pdInstitution: "National Research Council of Canada"
                //}
            ];

            //$scope.imagePath = "/static/img/new-zealand-679068_1280.jpg"

            /**
             * Warnings made for the postdoc information empty fields warning to the users.
             */

            $scope.pdStartYearWarning = false;
            $scope.pdEndYearWarning = false;
            $scope.pdSupervisorWarning = false;
            $scope.pdInstitutionWarning = false;

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
                //Series of statements checking if the postdoc fields are empty or not.
                if(pdStartYear == null || pdStartYear == undefined || pdStartYear == ""){
                    console.log("error: pdstartyear empty");
                    $scope.pdStartYearWarning = true;
                    return;
                }else{
                    $scope.pdStartYearWarning = false;
                }

                if(pdEndYear == null || pdEndYear == undefined || pdEndYear == ""){
                    console.log("error: pdendyear empty");
                    $scope.pdEndYearWarning = true;
                    return;
                }else{
                    $scope.pdEndYearWarning = false;
                }

                if(pdSupervisor == null || pdSupervisor == undefined || pdSupervisor == ""){
                    console.log("error: pdsupervisor empty");
                    $scope.pdSupervisorWarning = true;
                    return;
                }else{
                    $scope.pdSupervisorWarning = false;
                }

                if(pdInstitution == undefined || pdInstitution == null || pdInstitution == ""){
                    console.log("error: pdinstitution empty");
                    $scope.pdInstitutionWarning = true;
                    alert("String");
                    console.log(pdInstitution);
                    return;
                }else{
                    $scope.pdInstitutionWarning = false;
                    alert("alert value: " + pdInstitution);
                    console.log(pdInstitution);
                }

                //If the fields aren't empty then actually go through the process of creating the object
                //and putting it into the grand total postdocinstance list!

                var newPostDocInstance = new PostDocInstance(pdStartYear,pdEndYear,pdSupervisor,pdInstitution);
                $scope.postDocInformation.push(newPostDocInstance);
                console.log("AddPostDocInstance Called on" + $scope.postDocInformation);

                //"Clear" all of the fields. BUGGED, WHY WON'T THIS WORK? :(
                pdEndYear = null;
                pdStartYear= null;
                pdSupervisor = null;
                pdInstitution = null;
                alert("the Fields are clear...? :S");

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
                //{
                //    year: "2008", supervisor: "Todd L. Lowry", institution: "University of Alberta", type:  "Doctorate"
                //
                //},
                //{
                //    year:"1980", supervisor: "Raymond U. Lemieux", institution: "University of Alberta", type: "Doctorate"
                //}
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
             * Warnings for degree information fields being empty! :(
             *
             */
            $scope.diYearWarning = false;
            $scope.diSupervisorWarning = false;
            $scope.diInstitutionWarning = false;
            $scope.diTypeWarning = false;



            /**
             *
             * @param diYear Year of the degree being awarded.
             * @param diSupervisor Supervisor of the degree.
             * @param diInstitution Institution degree was awarded from.
             * @param diType Type of this degree.
             */
            $scope.addDegreeInfoInstance = function (diYear, diSupervisor, diInstitution, diType) {

                if(diYear == null || diYear == undefined || diYear == ""){
                    console.log("degree year is not filled out!");
                    $scope.diYearWarning = true;
                    return;
                }
                else{
                    $scope.diYearWarning = false;
                }


                if(diSupervisor == null || diSupervisor == undefined || diSupervisor == ""){
                    console.log("degree info supervisor is not filled out!");
                    $scope.diSupervisorWarning = true;
                    return;
                }else{
                    $scope.diSupervisorWarning = false;
                }

                if(diInstitution == null || diInstitution == undefined || diInstitution == ""){
                    console.log("degree info instituttion is not filled out!");
                    $scope.diInstitutionWarning = true;
                    return;
                }else{
                    $scope.diInstitutionWarning = false;
                }
                if(diType == null || diType == undefined || diType == ""){
                    console.log("degree info type is not filled out!");
                    $scope.diTypeWarning = true;
                    return;
                }else{
                    $scope.diTypeWarning = false;
                }

                var newDegreeInfoInstance = new DegreeInfoInstance(diYear, diSupervisor, diInstitution, diType);
                $scope.degreeInformation.push(newDegreeInfoInstance);
                console.log("AddPostDocInstance Called on" + $scope.degreeInfoInformation);

                diInstitution = null;
                diYear = null;
                diType = null;
                diSupervisor = null;


                //Refresh the view of the scope.
                //$scope.$apply();
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
                        currentInstitutionName, postDocInformation, degreeInformation,
                        superDegInformation, superDocInformation)
            {
                //Concatenating the first and last name together with a space between for now...
                var concatednatedNames = firstName + " " + lastName;
                this.name = concatednatedNames ;
                this.currentPositionTitle = currentPositionTitle;
                this.currentInstitutionName = currentInstitutionName;

                //Now the arrays of postdoc appointments and degrees.
                this.postDocInformation = postDocInformation;
                this.degreeInformation = degreeInformation;

                //Now the super degree and super postdoc information.
                this.superDegInformation = superDegInformation;
                this.superDocInformation = superDocInformation;
            }

            $scope.submitPageObject= null;


            /**
             * Warnings for the various input fields. Initially set to false.
             * But if the value is null then it is set to true and pops up a warning message.
             * @type {boolean}
             */
            $scope.firstNameWarning = false;
            $scope.lastNameWarning = false;
            $scope.currPositionTitleWarning = false;
            $scope.currInstNameWarning = false;

            $scope.warningsState = function(){
              console.log("firstnamewarning: " + $scope.firstNameWarning + " , lastnamewarning: " + $scope.lastNameWarning +
              "currpositiontitlewarning: " + $scope.currPositionTitleWarning + "currinstnamewarning : " + $scope.currInstNameWarning);
            };



            /**
             * Function evoked when the final submission button is hit, creates a new model object for the entire
             * submission page.
             */
            $scope.finalSubmitButtonFunction = function(){
                console.log("finalSubmitButtonFunction was called");

                //If the first name field does not have a value, spit out an error and return.
                if($scope.firstName == null || $scope.firstName == undefined || $scope.firstName == ""){
                    console.log("Error: First Name was not put into the firstname field");

                    $scope.firstNameWarning = true;
                    return;
                }
                else{
                    $scope.firstNameWarning = false; //If the field is not null set warning to false.
                }

                //If the last name field does not have a value, spit out an error and return.
                if($scope.lastName == null || $scope.lastName == undefined || $scope.lastName == ""){
                    console.log("Error: Last Name was not entered in the field.");

                    $scope.lastNameWarning = true;
                    return;
                }
                else{
                    $scope.lastNameWarning = false; //If the field is not null set warning to false.
                }

                //If the curr position field does not have a value, spit out an error and return.
                if($scope.currentPositionTitle == null || $scope.currentPositionTitle == undefined || $scope.currentPositionTitle == ""){
                    console.log("Error: Current Position Title was not entered into the field.");
                    $scope.currPositionTitleWarning = true;
                    return;
                }
                else{
                    $scope.currPositionTitleWarning = false; //If the field is not null set warning to false.
                }

                //If the current inst field does not have a value, spit out an error and return.
                if($scope.currentInstitutionName == null || $scope.currentInstitutionName == undefined || $scope.currentInstitutionName == ""){
                    console.log("Error: Current Institution Name was not entered into the field.");
                    $scope.currInstNameWarning = true;
                    return;
                }
                else{
                    $scope.currInstNameWarning = false; //If the field is not null set warning to false.
                }

                //Create the new object for the submission page.
                var newSubmitObject = new SubmissionPageModelObject($scope.firstName, $scope.lastName,
                    $scope.currentPositionTitle, $scope.currentInstitutionName, $scope.postDocInformation,
                    $scope.degreeInformation, $scope.superDegInformation, $scope.superDocInformation);


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
                if ($state.$current.name !== 'main.search') {
                    $state.go('main.search');
                }

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
