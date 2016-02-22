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
         var tabs = [
             { postDocID: 1, postDocDates: '1993-1995', postDocSupervisor: 'David Bundle',
                 postDocInstitution: 'University of Alberta'},
             { postDocID: 2, postDocDates: '1996-1996', postDocSupervisor: 'Morten Meldel',
                 postDocInstitution: 'Carlsberg Laboratory'}
             //{ title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},

         ],
             selected = null,
             previous = null;
            $scope.tabs = tabs; //Formally assigning the list above to the scope variable.
            $scope.selectedIndex = 2; //Index that the tabs start at.
            $scope.postDocID = 3; //Only set to 3 here for the sample data. Set back to 1 for release.

            /**
             * This function when invoked will take the current and then the old tab and then it will combine
             * the data together in such a way that we have the previous now equal to the selected, and then
             * index into the "tabs" list with the current value.
             */
            $scope.$watch('selectedIndex', function(current, old){
                previous = selected;
                selected = tabs[current];
                if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
                if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
            });

            /**
             * This function will add a new tab to the set of tabs that we currently have.
             * //@param title The title of the function to be addressed.
             * //@param view The view that will be assocaited with the tab being added to the total tabs list.
             */
            $scope.addTab = function (pdDate, pdSupervisor, pdInstitution) {
                //view = view || title + " Content View";
                var pdID = $scope.postDocID++; //Increment global PostDocID with addition.
                tabs.push({ postDocID: pdID, postDocDates: pdDate, postDocSupervisor: pdSupervisor, postDocInstitution: pdInstitution, disabled: false});
            };

            /**
             * This function when evoked will remove the selected tab from the screen.
             * @param tab The tab to be removed.
             */
            $scope.removeTab = function (tab) {
                $scope.postDocID--; //Decrement global postDocID with removal.
                var index = tabs.indexOf(tab);
                tabs.splice(index, 1);
            };

        }]);


