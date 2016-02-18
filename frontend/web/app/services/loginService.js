angular.module('chemGeno')
.service('loginService', function(store, $q, $http) {
  var userNamespace = '401ChemGenoUser'

  var userLoggedIn = function() {
    if (getUser() !== null) {
      return true;
    } else {
      return false;
    }
  };

  var getUser = function() {
    return store.get(userNamespace);
  };

  var login = function(user) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/authenticate',
      data: {email: user.email, password: user.password}
    }).success(function(resp) {
      store.set(userNamespace, resp);
      d.resolve(resp.user);
    }).error(function(resp) {
      d.reject(resp.error);
    });
    return d.promise;
  };

  var logout = function() {
    store.remove(userNamespace);
  }

  return  {
    userLoggedIn: userLoggedIn,
    login: login,
    getUser: getUser,
    logout: logout
  };
});
