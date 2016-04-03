/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.service('adminPanelService', function($q, $http, loginService, urlService) {

  var loadNotifications = function() {
    if (!loginService.isAdmin()) {
      return null;
    }
    var d = $q.defer();
    var token = loginService.getAuthToken();
    return $http({
        headers: {
          "Content-Type": "application/json'",
          "Authorization": token
        },
        method: 'GET',
        url: urlService.baseUrl() + 'api/notification',
    }).success(function (resp) {
        d.resolve(resp);
    }).error(function (resp) {
        console.log(resp);
        d.reject(resp.error);
    });
    return d.promise;
  };

  var getUsers = function() {
    if (!loginService.isAdmin()) {
      return null;
    }
    var d = $q.defer();
    return $http({
      method: 'GET',
      url: urlService.baseUrl() + 'user'
    }).success(function(res){
      d.resolve(res);
    }).error(function(res){
      d.reject(res);
    });
    return d.promise;
  };

  var getAdmins = function() {
    if (!loginService.isAdmin()) {
      return null;
    }
    var d = $q.defer();
    return $http({
      method: 'GET',
      url: urlService.baseUrl() + 'admins'
    }).success(function(res){
      d.resolve(res);
    }).error(function(res){
      d.reject(res);
    });
    return d.promise;
  };

  return {
    loadNotifications: loadNotifications,
    getUsers: getUsers,
    getAdmins: getAdmins
  }
});
