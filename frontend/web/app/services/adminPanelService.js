angular.module('chemGeno')
.service('adminPanelService', function($q, $http, loginService) {

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
        url: 'http://localhost:3000/api/notification',
    }).success(function (resp) {
        console.log(resp)
        d.resolve(resp);
    }).error(function (resp) {
        console.log(resp);
        d.reject(resp.error);
    });
    return d.promise;
  }

  return {
    loadNotifications: loadNotifications
  }
});
