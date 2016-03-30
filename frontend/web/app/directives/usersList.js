/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('usersList', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: function(elem, attr){
      return '/app/views/usersList.html';
    },
    controller: 'usersListController'
  }
});
