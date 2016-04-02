/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.service('viewService', function($q, $http, urlService) {
  /* used to view approved information */
  var obtainInformationFromBackEnd = function(idObj) {
    console.log(idObj)
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'GET',
      url: urlService.baseUrl() + 'api/aggregated/'+ idObj.id.toString(),
      params: {approved: true}
    }).success(function (resp) {
      d.resolve(resp);
    }).error(function (resp) {
      console.log(resp);
      d.reject(resp.error);
    });
    return d.promise;
  };

  /* used to view unapproved information */
  var getPerson = function(id) {
    console.log(id)
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'GET',
      url: urlService.baseUrl() + 'api/aggregated/'+ id.toString(),
      params: {approved: false}
    }).success(function (resp) {
      d.resolve(resp);
    }).error(function (resp) {
      console.log(resp);
      d.reject(resp.error);
    });
    return d.promise;
  };


  return{
    obtainInformationFromBackEnd: obtainInformationFromBackEnd,
    getPerson: getPerson
  };
});
