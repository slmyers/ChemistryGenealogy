/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('viewMentors', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    // extend towards institutions and such, ie, /app/views/chemautoinstitution.html
    // could exist one day.
    templateUrl: '/app/views/viewMentored.html'
  }
});
