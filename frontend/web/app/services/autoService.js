/**
 * @author Steven Myers
 */
angular.module('chemGeno')
.service('autoService', function($q, $http, urlService) {
  var autoPerson = function(name) {
    console.log('called with ' + name)
    var d = $q.defer();
    $http({
      header: 'Content-Type: application/json',
      method: 'GET',
      url: urlService.baseUrl() + 'auto_complete',
      params: {name: name}
    }).success(function (result){
      console.log(result)
      d.resolve(result);
    }).error(function(error) {
      console.log(error);
      d.reject(error);
    });
    return d.promise;
  }

  return {
    autoPerson: autoPerson
  }
});
