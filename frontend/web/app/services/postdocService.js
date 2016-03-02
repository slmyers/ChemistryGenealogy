angular.module('chemGeno')
.service('postdocService', function($q, $http, loginService) {
  var getUserId = function() {
    return loginService.getUser().user.id;
  }

  // rough draft not tested etc
  var updatePostdoc = function(person, postdoc) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: ':3000/api/postdoc' + postdoc.id.toString(),
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
