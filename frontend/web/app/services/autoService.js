angular.module('chemGeno')
.service('autoService', function($q, $http) {
  var autoPerson = function(name) {
    console.log('called with ' + name)
    var d = $q.defer();
    $http({
      header: 'Content-Type: application/json',
      method: 'GET',
      url: 'http://localhost:3000/auto_complete',
      params: {name: name}
    }).success(function (result){
      console.log(result)
      d.resolve(result);
    }).error(function(error) {
      console.log(error);
    });
    return d.promise;
  }

  return {
    autoPerson: autoPerson
  }
});
