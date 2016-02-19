angular.module('chemGeno')
.service('registerService', function(store, $q, $http) {
  var register = function(user) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/user',
      data: {email: user.email, password: user.password}
    }).success( function(res){
      console.log('register success');
      console.log(res);
      d.resolve(res.user);
    }).error( function(res){
      d.reject(res.error);
    });
    return d.promise;
  }

  return {
    register: register
  };
});
