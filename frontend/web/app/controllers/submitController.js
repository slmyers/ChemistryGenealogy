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
            //Basic tabs "list" like structure that will hold together all of the data in an appropriate format.
            //Basic columns: Institution, start date, end date.
         var tabs = [
             { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
             { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},

         ],
             selected = null,
             previous = null;
            $scope.tabs = tabs;
            $scope.selectedIndex = 2;

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
             * @param title The title of the function to be addressed.
             * @param view The view that will be assocaited with the tab being added to the total tabs list.
             */
            $scope.addTab = function (title, view) {
                view = view || title + " Content View";
                tabs.push({ title: title, content: view, disabled: false});
            };

            /**
             * This function when evoked will remove the selected tab from the screen.
             * @param tab The tab to be removed.
             */
            $scope.removeTab = function (tab) {
                var index = tabs.indexOf(tab);
                tabs.splice(index, 1);
            };

        }]);


