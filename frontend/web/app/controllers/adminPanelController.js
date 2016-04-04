/**
 * @author Steven Myers
 */
angular.module('chemGeno')
.controller('adminPanelController', ['$scope', 'adminPanelService', 'verificationService',
'$state',
function($scope, adminPanelService, verificationService, $state) {
  $scope.personNotifications = true;
  $scope.mentorshipNotifications = true;
  $scope.supervisionNotifications = true;

  $scope.loadData = function() {
    var promise = adminPanelService.loadNotifications();
    promise.then(function(resp){
      $scope.data = resp.data;
      console.log($scope.data)
    }, function(error){
      alert('error loading notifications');
    })
  };
  //Invokes the function that loads the data into the admin panel.
  $scope.loadData();

  $scope.loadTestData = function() {
    var testArray = [];
    for (var i = 0; i < 20; i++){
      var item = {id: i};
      testArray.push(item);
    }
    return testArray;
  }

  $scope.testData = $scope.loadTestData();

  $scope.allNotifications = function() {
    console.log('allNotifications called')
    $scope.personNotifications = true;
    $scope.mentorshipNotifications = true;
    $scope.supervisionNotifications = true;
  }

  $scope.people = function(){
    console.log('personNotifications called')
    $scope.personNotifications = true;
    $scope.mentorshipNotifications = false;
    $scope.supervisionNotifications = false;
  }

  $scope.mentorships = function(){
    console.log('mentorshipNotifications called')
    $scope.personNotifications = false;
    $scope.mentorshipNotifications = true;
    $scope.supervisionNotifications = false;
  }

  $scope.supervisions = function(){
    console.log('supervisionNotifications called')
    $scope.personNotifications = false;
    $scope.mentorshipNotifications = false;
    $scope.supervisionNotifications = true;
  }

  $scope.manageUsers = function() {
    $state.go('main.userManagement',
      {
        userNotifications: $scope.data.user_notifications,
        adminNotifications: $scope.data.admin_notifications
      });
  }
  
  $scope.gotoHome = function(){
    $state.go('main.search', {}, {reload:true});
  }
  $scope.gotoHome = function(){
    $state.go('main.search', {}, {reload:true});
  }
}]);
