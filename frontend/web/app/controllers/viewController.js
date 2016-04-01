/**
 * @module viewController
 * @class viewController
 * @author Steven Myers
 * This controller does all that can be done with the view page.
 * TODO: find bug that breaks on reload/refresh
 */


angular.module('chemGeno')
.controller('viewController', ['$scope', '$state', 'viewService', '$stateParams',
function($scope, $state, viewService, $stateParams) {
  //Keep the postdoc and degree information collapsed when the users first arrive at the page!
  $scope.mentorDetails = true;
  $scope.mentoredDetails = true;
  $scope.supervisedDetails = true;
  $scope.supervisorDetails = true;

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

  $scope.allDetails = function() {
    $scope.mentorDetails = true;
    $scope.mentoredDetails = true;
    $scope.supervisedDetails = true;
    $scope.supervisorDetails = true;
  };

  $scope.onlyMentorDetails = function(){
    $scope.mentorDetails = true;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = false;
  }

  $scope.onlyMentoredDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = true;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = false;
  }

  $scope.onlySupervisedDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = true;
    $scope.supervisorDetails = false;
  }

  $scope.onlySupervisorDetails = function(){
    $scope.mentorDetails = false;
    $scope.mentoredDetails = false;
    $scope.supervisedDetails = false;
    $scope.supervisorDetails = true;
  }

  $scope.gotoEdit = function(){
    $state.go('main.edit', {id: $scope.data.person.data.id});
  }

  $scope.gotoHome = function(){
    $state.go('main.search', {}, {reload:true});
  }
}]);
