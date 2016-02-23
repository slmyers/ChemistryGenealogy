angular.module('chemGeno')
.service('postdocService', function($q, $http, loginService) {
  var getUserId = function() {
    return loginService.getUser().user.id;
  }

  // use for a totally new postdoc
  var submitPostdoc = function(person, postdoc) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/postdoc',
      data: {
        user: getUserId(),
        person: person.id,
        mentor: postdoc.mentor,
        postdoc: postdoc
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('postdocService.submitPostdoc error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  };

  var updatePostdoc = function(person, postdoc) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: 'http://localhost:3000/api/postdoc' + postdoc.id.toString(),
      data: {
        user: getUserId(),
        person: person.id,
        mentor: postdoc.mentor,
        postdoc: postdoc
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('postdocService.updatePostdoc error');
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
