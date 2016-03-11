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
    .controller('adminPanelController', ['$scope', 'adminPanelService',
        function($scope, adminPanelService) {

            var mockChangesObject = {
               changesList: [
                   {
                       type: 'New Submission',
                       userId: '1'
                   },
                   {
                       type: 'Edit Submission',
                       userId: '2239'
                   }

               ]



            }
















        }]);
