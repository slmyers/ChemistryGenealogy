angular.module('chemGeno')
.service('loginService', function(store, $q) {
  var userNamespace = '401ChemGenoUser'

  var userLoggedIn = function() {
    if (getUser() !== null) {
      return true;
    } else {
      return false;
    }
  };

  var getUser = function() {
    return store.get(userNamespace)
  };

  var loginPromise = function(user) {
    var deferred = $q.defer();

    setTimeout(function() {
      deferred.notify('About to login ' + user + '.');

      if (user.username && user.password) {
        deferred.resolve('Hello, ' + user.username + ' with password: ' + user.password + '!');
        store.set(userNamespace, user);
      } else {
        deferred.reject('Greeting ' + user.username + ' with ' + user.password + ' is not allowed.');
      }
    }, 1000);

    return deferred.promise;
  };

  var login = function(user) {
    var promise = loginPromise(user);
    return promise;
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
