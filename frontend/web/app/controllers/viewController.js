/**
 * @module viewController
 * @class viewController
 *
 * This controller does all that can be done with the view page...
 */


angular.module('chemGeno')
.controller('viewController', ['$scope', '$state', 'viewService', '$location', '$stateParams',
  function($scope, $state, viewService, $location, $stateParams) {
    //Keep the postdoc and degree information collapsed when the users first arrive at the page!
    $scope.mentorVisibility = false;
    $scope.mentoredVisibility = false;
    $scope.supervisedVisibility = false;
    $scope.supervisorVisibility = false;
    $scope.unlockObject = function(){
      var promise = viewService.obtainInformationFromBackEnd( {id: $stateParams.id});
      promise.then(function(resp){
        $scope.data = resp.data;
      }, function(error){
        console.log("unable to retrive information about person: " + $stateParams.id);
      });
    };
    $scope.unlockObject();
    
    // idk what this code is or who put it here
    $scope.invokeEditPage = function(){
      console.log("Edit button pressed!");
      alert($stateParams.id);
      console.log($stateParams.id);
    };
    $scope.goBackToMain = function(){
      $location.path('search'); // path not hash
    };




    $scope.goToEdit = function(){
      var idVal = $scope.data.person.data.id;
      $state.go('main.edit', {id: idVal});
    };
}]);
