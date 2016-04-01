/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
// avoid any namespace clobbering
.directive('chemautoComplete', function($parse){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    // extend towards institutions and such, ie, /app/views/chemautoinstitution.html
    // could exist one day.
    templateUrl: function(elem, attr){
      return '/app/views/chemauto' + attr.type +'.html';
    },
    controller: 'personAutoController'
  }
});
