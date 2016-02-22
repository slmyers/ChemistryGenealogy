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
    .controller('submitController', ['$scope',
        function($scope) {

         //POSTDOC TABS:
         // Basic tabs "list" like structure that will hold together all of the data in an appropriate format.
         // Tabs is part of the model as described immediately below:
         // {postDocID, postDocDates, postDocSupervisor, postDocInstitution}
         var postDocTab = [
             { postDocID: 1, postDocDates: '1993-1995', postDocSupervisor: 'David Bundle',
                 postDocInstitution: 'University of Alberta'},
             { postDocID: 2, postDocDates: '1996-1996', postDocSupervisor: 'Morten Meldel',
                 postDocInstitution: 'Carlsberg Laboratory'}
         ],
             selected = null,
             previous = null,

         //DEGREE INFO TABS:
         //For our purposes the degree information is used to compile any advanced degrees that a user may have.
         //I elected to use tabs for this as people may have different supervisors for masters vs. PhD or even
         //multiple PhD/masters degrees from various fields. (Eg: Perhaps Chemistry AND Criminal Justice?)
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
             */
            $scope.$watch('selectedIndex', function(current, old){
                previous = selected;
                selected = postDocTab[current];
                if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
                if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
            });

            /** POSTDOC FUNCTION.
             * This function will add a new tab to the set of tabs that we currently have.
             *
             * @param pdDate The dates of the start and ending of the postdoc appointment.
             * @param pdSupervisor The supervisor of the postdoc appointment.
             * @param pdInstitution The institution of the postdoc appointment.
             */
            $scope.addPDTab = function (pdDate, pdSupervisor, pdInstitution) {
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
             */
            $scope.$watch('selectedIndex', function(current2, old2){
                previous = selected;
                selected = degreeInfoTab[current];
                if ( old2 + 1 && (old2 != current)) $log.debug('Goodbye ' + previous.title + '!');
                if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
            });

            /** DEGREE INFO FUNCTION.
             * This function will add a new tab to the set of tabs that we currently have.
             *
             * @param diYear The year that the degree was obtained.
             * @param diSupervisor The supervisor who oversaw the degree.
             * @param diInstitution The institution that awarded the degree.
             */
            $scope.addDITab = function (diYear, diSupervisor, diInstitution) {
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








            /** MODEL
             * This is the model for this submission page.
             * First name, last name, title, degree type, current position title, current institution, postdoc info
             *
             * @type {{usersFirstName: null, usersLastName: null, usersTitle: null, usersDegreeType: null, usersCurrentPositionTitle: null, usersCurrentInstitutionName: null, usersPostDocInfo: *[]}}
             */
            var submitPageModel;

            submitPageModel = {
                usersFirstName: null,
                usersLastName: null,
                usersTitle: null,
                usersDegreeType: null,
                usersCurrentPositionTitle: null,
                usersCurrentInstitutionName: null,
                usersPostDocInfo: postDocTab

            };

        }]);


