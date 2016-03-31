/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('adminsList', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: function(elem, attr){
      return '/app/views/adminsList.html';
    }
  }
});
