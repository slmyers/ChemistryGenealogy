angular.module('chemGeno')
.service('verificationService', function($q, $http, loginService) {
  // backend expects an :id but I didn't factor this in when writing the
  // controller, so I'm just attaching an arbitray id.
  // 5:30am
  var verifyInfo = function(paramObj) {
    var d = $q.defer();
    var token = loginService.getAuthToken();
    return $http({
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      method: 'PUT',
      url: 'http://localhost:3000/api/verification/1337',
      data: paramObj,
    }).success(function(resp){
      d.resolve(resp);
    }).error(function(error){
      d.reject(error);
    })
    return d.promise
  };

  var deleteInfo = function(paramObj) {
    var d = $q.defer();
    var token = loginService.getAuthToken();
    return $http({
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      method: 'DELETE',
      url: 'http://localhost:3000/api/verification/1337',
      data: paramObj,
    }).success(function(resp){
      d.resolve(resp);
    }).error(function(error){
      d.reject(error);
    })
    return d.promise
  };


  return {
    verifyInfo: verifyInfo,
    deleteInfo: deleteInfo
  }
});
