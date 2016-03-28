/**
 * @author Steven Myers
 */
angular.module('chemGeno')
.service('searchService', function($q, $http, $rootScope, $state) {
  var searchPerson = function(type, id) {
    var d = $q.defer();
    var self = this;
    if (type === 'id') {
      return $http({
        method: 'GET',
        params: {id: id},
        url: 'http://localhost:3000/search',
      }).success(function(resp) {
        d.resolve(resp);
      }).error(function(err){
        d.reject(err);
      });
    } else if (type === 'name'){
      return $http({
        method: 'GET',
        params: {name: id},
        url: 'http://localhost:3000/search',
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
    var promise = searchPerson(type, identifier);
    if (!$state.is('main.search')){
      $state.go('main.search', {}, {reload: true})
      .then(promise.then(function(result){
        $rootScope.$broadcast('search:response',result.data);
      }))
    }
    else {
      promise.then(function(result) {
        console.log('successful search on ' + identifier);
        $rootScope.$broadcast('search:response',result.data);
      }, function(error) {
        console.log('error search on ' + identifier);
        console.log(error);
      });
    }
  }

  return {
    executeSearch: executeSearch
  }
});
