angular.module('chemGeno')


    //Stating that this is a controller for this project.
    .controller('editController', ['$scope', 'editService', 'viewService', '$location', '$stateParams',
        function($scope, editService,  viewService, $location, $stateParams) {

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
             * This section is concerned with obtaining the object from the backend and then bursting it onto the
             * entire edit page appropriately.
             */

            /**
             * Technically done at the very start.
             */
            $scope.unlockObject = function(){
                console.log("unlockObject function called");
                var promise = viewService.obtainInformationFromBackEnd( {id: $stateParams.id});
                promise.then(function(resp){
                    $scope.data = resp.data;

                    $scope.unpackObject();
                }, function(error){
                    console.log("ERROR GETTTING OBJECT!!!!!!");
                });

                $scope.mockObjectRecieved = $scope.data;
            };
            $scope.unlockObject();


            $scope.unpackObject = function(){

                console.log("Unpack object called upon: " + $scope.data);
                //console.log($scope.data);
                $scope.personId= $scope.data.person.data.id; //Unique identifier for the person.
                //console.log($scope.personId);

                $scope.firstName = $scope.data.person.data.name.split(" ")[0];
                //console.log($scope.firstName);

                $scope.lastName = $scope.data.person.data.name.split(" ")[1];
                //console.log($scope.lastName);

                $scope.currentPositionTitle = $scope.data.person.data.position;
                //console.log($scope.currentPositionTitle);

                $scope.currentInstitutionName = $scope.data.person.institution.name;
                //console.log($scope.currentInstitutionName);

                $scope.currentInstitutionId = $scope.data.person.institution.id;
                //console.log($scope.currentInstitutionId);


                $scope.postDocInformation = $scope.data.mentors;
                //console.log($scope.postDocInformation);

                $scope.degreeInformation = $scope.data.supervisors;
                //console.log($scope.degreeInformation);

                $scope.superDocInformation = $scope.data.mentored;
                //console.log($scope.superDocInformation);

                $scope.superDegInformation = $scope.data.supervised;
                console.log($scope.superDegInformation);

            };


            /**
             * Constructor...
             */
            function EditPageModelObject(){
                person:{
                    data:{
                        name = null;
                    }
                }

            }

            /**
             * The final function that prepares the editPageModelObject to be sent to the backend.
             * Loads any differences found into the editPageModelObject! :)
             */
            $scope.finalEditFunction = function(){

                var editPageModelObject = new EditPageModelObject;
                //compare name located within the data object to the submitted name.
                var name = $scope.firstName + " " + $scope.lastName;
                if(name !== $scope.data.person.data.name){
                    editPageModelObject.person.data.name = name;
                    console.log("name diff");
                }

                //compare the title
                if($scope.currentPositionTitle !== $scope.data.person.data.position){
                    editPageModelObject.person.data.position = $scope.currentPositionTitle;
                }

                //compare the institution name
                if($scope.currentInstitutionName !== $scope.data.person.institution.name){
                    editPageModelObject.person.institution.name = $scope.currentInstitutionName;
                }

                //Crudely compare mentors
                if($scope.postDocInformation !== $scope.data.mentors){
                    editPageModelObject.mentors = $scope.postDocInformation;
                }

                if($scope.degreeInformation !== $scope.data.supervisors){
                    editPageModelObject.supervisors = $scope.degreeInformation;
                }

                if($scope.superDocInformation !== $scope.data.mentored){
                    editPageModelObject.mentored = $scope.superDocInformation;
                }

                if($scope.superDegInformation !== $scope.data.supervised){
                    editPageModelObject.supervised = $scope.superDegInformation;
                }


                console.log(editPageModelObject);
            };





            console.log("scope data: " + $scope.data);

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
             * @constructor
             */
            function SuperDocInstance(superDocNameOfPerson, superDocStartYear, superDocEndYear, superDocInstitution)
            {
                this.superDocNameOfPerson = superDocNameOfPerson,
                    this.superDocStartYear = superDocStartYear,
                    this.superDocEndYear = superDocEndYear,
                    this.superDocInstitution = superDocInstitution
            }


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


            $scope.showSuperDocInfo = function(){
                $scope.postdocSupervisionVisibility = true;
            };

            $scope.hideSuperDocInfo = function(){
                $scope.postdocSupervisionVisibility = false;
            };


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
            $scope.superDegCurrPosition = null;
            $scope.superDegCurrInst = null;
            $scope.superDegDegType = null;
            $scope.superDegYear = null;
            $scope.superDegInst= null;

            /**
             * Construct a super DEGREE object.
             * @param superDegNameOfPerson
             * @param superDegCurrPosition
             * @param superDegCurrInst
             * @param superDegDegType
             * @param superDegYear
             * @param superDegInst
             * @constructor
             */
            function SuperDegInstance(superDegNameOfPerson,superDegCurrPosition, superDegCurrInst, superDegDegType, superDegYear, superDegInst)
            {
                this.superDegNameOfPerson = superDegNameOfPerson,
                this.superDegCurrPosition = superDegCurrPosition,
                    this.superDegCurrInst = superDegCurrInst,
                    this.superDegDegType = superDegDegType,
                    this.superDegYear = superDegYear,
                    this.superDegInst = superDegInst
            }


            $scope.addSuperDegInstance = function(superDegNameOfPerson, superDegCurrPosition, superDegCurrInst, superDegDegType, superDegYear, superDegInst){
                var newSuperDegInstance = new SuperDegInstance(superDegNameOfPerson, superDegCurrPosition, superDegCurrInst, superDegDegType, superDegYear, superDegInst);
                $scope.superDegInformation.push(newSuperDegInstance);
                console.log("addSuperDegInstance Called on" + $scope.superDegInformation);


            };


            $scope.showSuperDegInfo = function(){
                $scope.superDegVisibility = true;
            };

            $scope.hideSuperDegInfo = function(){
                $scope.superDegVisibility = false;
            };

            /**
             * Initialize as an empty array, for now. Will be populated with SUPER DEGREE objects.
             * @type {Array}
             */
            $scope.superDegInformation = [ ] ;

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


            //The data object obtained from the backend.
            $scope.data = null;

            /**
             * This function will be how I retrieve the proper object from the backend, through the editService
             * file.
             */
            //$scope.realObjectFromBackend = obtainUserInformationFromBackEnd


            /**
             * Function called at the very start of this page's creation.
             * Responsible for calling to the backend through the services to obtain the edit page object.
             */
            $scope.buildEditPage = function(){
                var promise = editService.obtainUserInformationFromBackEnd(1);
                promise.then(function(resp){
                  $scope.data = resp;
                }, function(error){
                    console.log("ERROR GETTTING OBJECT!!!!!!");
                });

            };
            /**
             * Mock Object. This is what I will be expecting to recieve from the backend throughthe function
             * "obtainUserInformationFromBackEnd".
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

                }],

                superDocInformation:[{
                    superDocNameOfPerson: "Onion Knighty",
                    superDocStartYear: "1991",
                    superDocEndYear: "99999",
                    superDocInstitution: "onion academy"
                }],

                superDegInformation:[{
                    superDegNameOfPerson: "fromage mon dieu"
                }]
            };





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

            /**SPECIFIC TO EDIT FUNCTIONALITY! **/

            /**Basic Info Section:
             * This section deals with trivial information collection on the submit page such as first and last names.
             */
            //$scope.firstName = $scope.mockObjectRecieved.name.split(" ")[0];
            //$scope.lastName = $scope.mockObjectRecieved.name.split(" ")[1];
            //$scope.currentPositionTitle = $scope.mockObjectRecieved.currentPositionTitle;
            //$scope.currentInstitutionName = $scope.mockObjectRecieved.currentInstitutionName;
            //$scope.degreeInformation = $scope.mockObjectRecieved.degreeInformation;
            //$scope.postDocInformation = $scope.mockObjectRecieved.postDocInformation;
            //$scope.superDegInformation = $scope.mockObjectRecieved.superDegInformation;
            //$scope.superDocInformation = $scope.mockObjectRecieved.superDocInformation;






            /**
             * Simple function that I can invoke when I want to see what the contents of the basic inputs are.
             */
            $scope.testBasicInputs = function(){
                console.log($scope.firstName + " " + $scope.lastName + " " + $scope.title
                    + " " + $scope.currentPositionTitle + " " + $scope.currentInstitutionName);
            };


            /**
             * This function is evoked when the user decides to commit their edits to the page and send it off to
             * the backend of the server.
             *
             * PRIMARY GOAL: Create a brand new object (extremely similar to the submit page) of all of the inputs
             * from the user on this page.
             *
             *
             * SECONDARY GOAL: This second goal is to take the data that we already had given to us from
             * the backend and then to individually element-by-element in the objects check if there was any
             * difference in the edited object (made when this button is hit) and if there is then it is packed
             * into a new object that is a differences object which is sent to the backend.
             *
             * The differences object will contain "nulled" (As a very weird string that likely will be unique in most
             * cases?) if there were no changes in the data. This allows the specific items of concern to be
             * determined by the backend relatively easily. If it is "nulled" then just move on, no changes.
             *
             * This function makes use ot the editServices file to achieve this goal.
             */
            $scope.editMasterButton = function(){
                console.log("editMasterButton function called");

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
                    $scope.degreeInformation);

                //Create a new repository for information to be put into.
                //If the value is null then there are no changes to be made to the dataset.
                var differenceObject = {
                    name: "nulled",
                    currentPositionTitle :"nulled",
                    currentInstitutionName: "nulled",
                    degreeInformation: "nulled",
                    postDocInformation: "nulled"

                };


                var differenceObject2 = {
                    name: "fromage",
                    currentPositionTitle :"cheese knight!",
                    currentInstitutionName: "Onion Knights too",
                    degreeInformation: "nulled",
                    postDocInformation: "nulled"
                };


                $scope.submitPageObject = newSubmitObject;

                //The goal of this following section is to analyze the contents of the newly created object
                //and the old object. If the fields ARE different then it will parse together a specific object to be
                //sent to the backend indicating the specific fields that need to be changed.

                //console.log(Object.keys($scope.submitPageObject).length);


                //If there are no changes and the objects are equal, then send the completely null-object to the
                //backend.
                if($scope.submitPageObject == $scope.mockObjectRecieved){
                    editService.sendEditedData(differenceObject);
                }

                //If the name is different then load the new name into difference object and send it to backend.
                if($scope.submitPageObject.name != $scope.mockObjectRecieved.name){
                    differenceObject.name = $scope.submitPageObject.name;
                }

                //If the institution name is different, then add it to the difference object. Send it to backend.(ntyet)
                if($scope.submitPageObject.currentInstitutionName != $scope.mockObjectRecieved.currentInstitutionName){
                    differenceObject.currentInstitutionName = $scope.submitPageObject.currentInstitutionName;
                }

                //If the degreeInformation is different, then add it to the difference object.
                if($scope.submitPageObject.degreeInformation != $scope.mockObjectRecieved.degreeInformation){
                    differenceObject.degreeInformation= $scope.submitPageObject.degreeInformation;
                }

                //If the postDocInformation is different, then add it to the difference object.
                if($scope.submitPageObject.postDocInformation != $scope.mockObjectRecieved.postDocInformation){
                    differenceObject.postDocInformation = $scope.submitPageObject.postDocInformation;
                }

                //Once all of these conditionals have been iterated through, take the object and hurl it at the backend.
                editService.sendEditedData(differenceObject);




            };




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

            function PostDocInstance(pdStartYear, pdEndYear, pdSupervisor, pdInstitution, pdId, pdApproved)
            {
                this.pdStartYear = pdStartYear,
                    this.pdEndYear = pdEndYear,
                    this.pdSupervisor = pdSupervisor,
                    this.pdInstitution = pdInstitution,
                this.postdoc_approved = pdApproved,
                this.postdoc_id = pdId
            }

            /**
             * Warnings made for the postdoc information empty fields warning to the users.
             */

            $scope.pdStartYearWarning = false;
            $scope.pdEndYearWarning = false;
            $scope.pdSupervisorWarning = false;
            $scope.pdInstitutionWarning = false;



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
            $scope.addPostDocInstance = function (pdStartYear, pdEndYear, pdSupervisor, pdInstitution, pdId, pdApproved) {

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

                var newPostDocInstance = new PostDocInstance(pdStartYear,pdEndYear,pdSupervisor,pdInstitution, pdId, pdApproved);
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
             * @param diId id of degree.
             * @param supervisionId id of supervisor.
             *
             * @constructor
             */
            function DegreeInfoInstance(diYear, diSupervisor, diInstitution, diType, diId, supervisionId)
            {
                this.year = diYear;
                this.supervisor = diSupervisor;
                this.institution = diInstitution;
                this.type = diType;
                this.degree_id = diId;
                this.degree_approved = false;
                this.supervision_id = supervisionId;
                this.supervision_approved = false;

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
             * @param diId id of degree.
             * @param supervisionId id of supervisor.
             */
            $scope.addDegreeInfoInstance = function (diYear, diSupervisor, diInstitution, diType, diId, supervisionId) {


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
                var newDegreeInfoInstance = new DegreeInfoInstance(diYear, diSupervisor, diInstitution, diType, idId, supervisionId);
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
             * @param currentPositionTitle
             * @param currentInstitutionName
             * @param postDocInformation
             */
            function SubmissionPageModelObject(firstName, lastName, currentPositionTitle,
                                               currentInstitutionName, postDocInformation, degreeInformation)
            {
                //Single units of data for this object.
                //this.firstName = firstName;
                //this.lastName = lastName;

                //Concatenating the first and last name together with a space between for now...
                this.id = $scope.data.person.data.id;

                var concatednatedNames = firstName + " " + lastName;
                this.name = concatednatedNames ;

                this.approved =  false;

                this.currentPositionTitle = currentPositionTitle;
                this.currentInstitutionName = currentInstitutionName;



                //Now the arrays.
                this.postDocInformation = postDocInformation;
                this.degreeInformation = degreeInformation;
            }

            $scope.submitPageObject= null;



            //console.log("Unpack object called upon: " + $scope.data);
            ////console.log($scope.data);
            //$scope.personId= $scope.data.person.data.id; //Unique identifier for the person.
            ////console.log($scope.personId);
            //
            //$scope.firstName = $scope.data.person.data.name.split(" ")[0];
            ////console.log($scope.firstName);
            //
            //$scope.lastName = $scope.data.person.data.name.split(" ")[1];
            ////console.log($scope.lastName);
            //
            //$scope.currentPositionTitle = $scope.data.person.data.position;
            ////console.log($scope.currentPositionTitle);
            //
            //$scope.currentInstitutionName = $scope.data.person.institution.name;
            ////console.log($scope.currentInstitutionName);
            //
            //$scope.currentInstitutionId = $scope.data.person.institution.id;
            ////console.log($scope.currentInstitutionId);
            //
            //
            //$scope.postDocInformation = $scope.data.mentors;
            ////console.log($scope.postDocInformation);
            //
            //$scope.degreeInformation = $scope.data.supervisors;
            ////console.log($scope.degreeInformation);
            //
            //$scope.superDocInformation = $scope.data.mentored;
            ////console.log($scope.superDocInformation);
            //
            //$scope.superDegInformation = $scope.data.supervised;
            //console.log($scope.superDegInformation);
            //
            //





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



                console.log($scope.firstName);
                console.log("finalSubmitButtonFunction was called");

                //Create the new object for the submission page.
                var newSubmitObject = new SubmissionPageModelObject($scope.firstName, $scope.lastName,
                    $scope.currentPositionTitle, $scope.currentInstitutionName, $scope.postDocInformation,
                    $scope.degreeInformation);

                $scope.submitPageObject = newSubmitObject;

                //Send data over.
                editService.sendEditedData($scope.submitPageObject);


                //Debugging and checking out what is going on here.
                console.log(   "name: " + $scope.name);
                //console.log($scope.lastName);
                console.log(   "currentPositionTitle: " + $scope.currentPositionTitle);
                console.log(   "currentInstName: " + $scope.currentInstitutionName);
                console.log(   "postDocInfo: " + $scope.postDocInformation);


                //Check out the items in the postdoc information list.
                for(var i = 0; i < $scope.postDocInformation.length; i++){
                    console.log($scope.postDocInformation[i]);
                }

                //Check out the items in the degree information list.
                for(i = 0; i < $scope.degreeInformation.length; i++){
                    console.log($scope.degreeInformation[i]);

                }

                console.log($scope.submitPageObject);


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
