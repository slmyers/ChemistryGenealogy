angular.module('chemGeno')
.service('loginService', function(store, $q) {
  var loggedIn = false;

  var userLoggedIn = function() {
    return loggedIn;
  };

  var loginPromise = function(user) {
    var deferred = $q.defer();

    setTimeout(function() {
      deferred.notify('About to login ' + user + '.');

      if (user.username && user.password) {
        deferred.resolve('Hello, ' + user.username + ' with password: ' + user.password + '!');
        loggedIn = true;
      } else {
        deferred.reject('Greeting ' + user.username + ' with ' + user.password + ' is not allowed.');
      }
    }, 1000);

    return deferred.promise;
  };

  var login = function(user) {
    var promise = loginPromise(user);
    promise.then(function(greeting) {
      alert('Success: ' + greeting + ' loggedIn === ' + loggedIn);
    }, function(reason) {
      alert('Failed: ' + reason);
    });
  }

  return  {
    userLoggedIn: userLoggedIn,
    login: login
  };
});
