/**
  * @author Steven Myers
  */

angular.module('chemGeno')
.controller('usersListController', ['$scope', '$q', '$http',
function($scope, $q, $http){
  $scope.removeUser = function(user, index) {
    var promise = $scope.removePromise(user);
    promise.then(function(){
      $scope.data.splice(index, 1);
    })
  };

  $scope.makeAdmin = function(user, index) {
    var promise = $scope.adminPromise(user);
    promise.then(function(){
      $scope.data.splice(index, 1);
    })
  };

  $scope.removePromise = function(user) {
    var d = $q.defer();
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/user/' + user.id.toString()
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
      url: 'http://localhost:3000/admins',
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
