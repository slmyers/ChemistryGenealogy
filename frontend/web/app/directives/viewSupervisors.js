/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('viewSupervisors', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.goNext = function(supervisors) {
        $state.go('main.view', {id: supervisors.supervisor.person.id});
      }
    }],
    templateUrl: '/app/views/viewSupervisors.html'
  }
});
