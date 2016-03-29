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
  $scope.mentorDetails = false;
  $scope.mentoredDetails = false;
  $scope.supervisedDetails = false;
  $scope.supervisorDetails = false;
  $scope.fullDetails = true;

  $scope.loadData = function(){
    var promise = viewService.obtainInformationFromBackEnd( {id: $stateParams.id});
    promise.then(function(resp){
      $scope.data = resp.data;
      console.log($scope.data);
    }, function(error){
      console.log("unable to retrive information about person: " + $stateParams.id);
    });
  };
  //Calls the object to be unlocked.
  $scope.loadData();

}]);
