angular.module('chemGeno')
.service('degreeService', function($q, $http, loginService) {
  var getUserId = function() {
    return loginService.getUser().user.id;
  }

  // use for a totally new postdoc
  var submitDegree = function(person, degree) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/degree',
      data: {
        user: getUserId(),
        person: person.id,
        supervisor: degree.supervisor,
        degree: degree
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('degreeService.submitDegree error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  };

  var updateDegree = function(person, degree) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: 'http://localhost:3000/api/degree' + degree.id.toString(),
      data: {
        user: getUserId(),
        person: person.id,
        supervisor: degree.supervisor,
        degree: degree
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('submitPersonService.submitPerson error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  };

  return {
    submitPostdoc: submitPostdoc,
    updatePostdoc: updatePostdoc
  }
});
