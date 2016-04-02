angular.module('chemGeno')
.service('urlService', function() {
  var baseUrl = function(){
    return 'http://localhost:3000/';
  };

  return {
    baseUrl: baseUrl
  }
});
