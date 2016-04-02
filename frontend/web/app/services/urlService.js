angular.module('chemGeno')
.service('urlService', function() {
  var baseUrl = function(){
    return 'http://162.246.156.132:3000/';
  };

  return {
    baseUrl: baseUrl
  }
});
