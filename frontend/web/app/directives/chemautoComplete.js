angular.module('chemGeno')
// avoid any namespace clobbering
.directive('chemautoComplete', function($parse){
  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: function(elem, attr){
      return '/app/views/chemauto' + attr.type +'.html';
    },
    controller: 'personAutoController'
  }
});
