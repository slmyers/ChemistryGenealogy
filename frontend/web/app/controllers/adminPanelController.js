/**
 * @module adminPanelController
 * @class adminPanelController
 *
 * Responsible for every functionality given by the administrator panel for the frontend.
 */

angular.module('chemGeno')
.controller('adminPanelController', ['$scope', 'adminPanelService', 'verificationService',
function($scope, adminPanelService, verificationService) {

    /**
     * This function loads the data from the services for this admin panel page.
     *
     * @method loadData
     */
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

    /**
     * This function is invoked upon an index in order to approve a new user registration.
     *
     * @method approveUser
     * @param index
     */
  $scope.approveUser = function(index) {
    var paramObj = {user: $scope.data.user_notifications[index].id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.user_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };


    /**
     * This method is called with an index of the user in question, called when the admin wants to raise
     * a user's status to admin status.
     *
     * @method approveAdmin
     * @param index The index of a user object
     */
  $scope.approveAdmin = function(index) {
    var paramObj = {admin: $scope.data.admin_notifications[index].id};
    var promise = verificationService.verifyInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.admin_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };

    /**
     * This method is involved in rejecting a user that was proposed to be an administrator.
     *
     * @method rejectAdmin
     * @param index The index of a user object
     */
  $scope.rejectAdmin = function(index) {
    var paramObj = {admin: $scope.data.admin_notifications[index].id};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.admin_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };

    /**
     * This method is involved when the administrator decides to not allow a new registered user to be approved to be
     * a full user.
     *
     * @method rejectUser
     * @param index The index of a user object.
     */
  $scope.rejectUser = function(index) {
    var paramObj = {user: $scope.data.user_notifications[index].id};
    var promise = verificationService.deleteInfo(paramObj);
    promise.then(function(resp) {
      console.log(resp);
      $scope.data.user_notifications.splice(index, 1);
    }, function (error) {
      alert(error);
    });
  };

}]);
