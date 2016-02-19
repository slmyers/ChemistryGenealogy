angular.module('chemGeno')
.service('registerService', function(store, $q, $http) {
  // sanity check
  var _checkReturnedFields = function(returnedUsername, inputUser) {
    if(returnedUsername !== inputUser.username) {
      return false;
    }
    return true;
  };

  var register = function(user) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/user',
      data: {email: user.email, password: user.password, first_name: user.firstName, last_name: user.lastName}
    }).success( function(res){
      console.log('success');
      console.log(res);
      if(!_checkReturnedFields(res.username, user)){
        d.reject({error: "expected returned username: " + user.username + " got: " + res.data.username})
      } else {
        d.resolve(res.user);
      }

    }).error( function(res){
      d.reject(res.error);
    });
    return d.promise;
  }

  return {
    register: register
  };
});
