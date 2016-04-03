/**
 * @author Steven Myers
 */
angular.module('chemGeno')
.service('searchService', function($q, $http, $rootScope, $state, urlService) {
  var searchPerson = function(type, id) {
    var d = $q.defer();
    var self = this;
    if (type === 'id') {
      return $http({
        method: 'GET',
        params: {id: id},
        url: urlService.baseUrl() + 'search',
      }).success(function(resp) {
        d.resolve(resp);
      }).error(function(err){
        d.reject(err);
      });
    } else if (type === 'name'){
      return $http({
        method: 'GET',
        params: {name: id},
        url: urlService.baseUrl() + 'search',
      }).success(function(resp) {
        d.resolve(resp);
      }).error(function(err){
        d.reject(err);
      });
    } else {
      d.reject('must be by name or id');
      console.log('searchService.searchPerson expects either a name or id')
    }
    return d.promise;
  }

  var executeSearch = function(type, identifier) {
    console.log(type);
    var promise = searchPerson(type, identifier);
    promise.then(function(result){
      console.log(result.data);
      $rootScope.$broadcast('search:response',result.data);
    });
  }

  return {
    executeSearch: executeSearch
  }
});
