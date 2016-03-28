/**
 * @module viewController
 * @class viewController
 * @author Steven Myers
 * This controller does all that can be done with the view page.
 */


angular.module('chemGeno')
.controller('viewController', ['$scope', '$state', 'viewService', '$location', '$stateParams',
  function($scope, $state, viewService, $location, $stateParams) {
    //Keep the postdoc and degree information collapsed when the users first arrive at the page!
    $scope.mentorVisibility = false;
    $scope.mentoredVisibility = false;
    $scope.supervisedVisibility = false;
    $scope.supervisorVisibility = false;

      /**
       * Called when the page is loaded to get the object from the backend and associate it with the data.
       *
       * @method unlockObject
       */
      $scope.unlockObject = function(){
      var promise = viewService.obtainInformationFromBackEnd( {id: $stateParams.id});
      promise.then(function(resp){
        $scope.data = resp.data;
        console.log($scope.data);
      }, function(error){
        console.log("unable to retrive information about person: " + $stateParams.id);
      });
    };

      //Calls the object to be unlocked.
    $scope.unlockObject();

      /**
       * Go to the edit page for this view, sending the id of the currently examined person
       *
       * @method invokeEditPage
       */
    $scope.invokeEditPage = function(){
      console.log("Edit button pressed!");
      alert($stateParams.id);
      console.log($stateParams.id);
    };

      /**
       * Go back to the main (search) page
       *
       * @method goBackToMain
       */
      $scope.goBackToMain = function(){
      $location.path('search'); // path not hash
    };


      /**
       * Go to the edit page.
       *
       * @method goToEdit
       */
      $scope.goToEdit = function(){
      var idVal = $scope.data.person.data.id;
      $state.go('main.edit', {id: idVal});
    };
}]);
