/**
 * @author Steven Myers
 */
angular.module('chemGeno')
.service('searchService', function($q, $http, $rootScope) {
  var searchPerson = function(id) {
    var d = $q.defer();
    var self = this;
    return $http({
      method: 'GET',
      params: {id: id},
      url: 'http://localhost:3000/search',
    }).success(function(resp) {
      d.resolve(resp);
    }).error(function(err){
      d.reject(err);
    });
    return d.promise;
  }

  var executeSearch = function(personName) {
    var promise = searchPerson(personName);
    promise.then(function(result) {
      console.log('successful search on ' + personName);
      $rootScope.$broadcast('search:response',result.data);
    }, function(error) {
      console.log('error search on ' + personName);
      console.log(error);
    });
  }

  return {
    executeSearch: executeSearch
  }
});
