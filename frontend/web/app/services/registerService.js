angular.module('chemGeno')
.service('registerService', function(store, $q, $http) {
  var register = function(user) {
    var d = $q.defer();
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/user',
      params: {email, user.email, username: user.username, password: user.password}
    }).success( function(res){
      d.resolve(resp.user);
    }).error( function(res){
      d.reject(resp.error);
    });
    return d.promise;
  }

  return {
    register: register
  };
});
