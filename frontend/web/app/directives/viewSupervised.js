/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('viewSupervised', function(){
  return {
    restrict: 'E',
    scope: {
      data: '=',
      links: '='
    },
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.goNext = function(supervised) {
        $state.go('main.view', {id: supervised.person.data.id});
      }
    }],
    templateUrl: '/app/views/viewSupervised.html'
  }
});
