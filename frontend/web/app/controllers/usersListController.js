/**
  * @author Steven Myers
  */

angular.module('chemGeno')
.controller('usersListController', ['$scope', '$q', '$http', '$rootScope', 'urlService',
function($scope, $q, $http, $rootScope, urlService){
  $scope.removeUser = function(user, index) {
    var promise = $scope.removePromise(user);
    promise.then(function(){
      $rootScope.$broadcast('userMangement:reload');
    })
  };

  $scope.makeAdmin = function(user, index) {
    var promise = $scope.adminPromise(user);
    promise.then(function(){
      $rootScope.$broadcast('userMangement:reload');
    })
  };

  $scope.removePromise = function(user) {
    var d = $q.defer();
    return $http({
      method: 'DELETE',
      url: urlService.baseUrl() + 'user/' + user.id.toString()
    }).success(function(resp) {
      d.resolve(resp);
    }).error(function(resp) {
      console.log(resp);
      d.reject(resp.error);
    });
    return d.promise;
  }

  $scope.adminPromise = function(user) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: urlService.baseUrl() + 'admins',
      data: {user_id: user.id}
    }).success(function(resp) {
      d.resolve(resp);
    }).error(function(resp) {
      console.log(resp);
      d.reject(resp.error);
    });
    return d.promise;
  }
}]);
