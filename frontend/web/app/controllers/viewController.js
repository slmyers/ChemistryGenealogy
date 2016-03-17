
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
    $scope.invokeEditPage = function(){
      console.log("Edit button pressed!");
      alert($stateParams.id);
      console.log($stateParams.id);
    };
    $scope.goBackToMain = function(){
      $location.path('search'); // path not hash
    };




    $scope.goToEdit = function(){
      console.log("goToView function called! :) ");
      //alert(person.id);
      console.log($stateParams.id);
      $state.go('main.edit', {id: $scope.data.person.data.id});

    };
}]);
