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
    templateUrl: '/app/views/viewMentors.html',
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.goNext = function(mentor) {
        $state.go('main.view', {id: mentor.mentor.data.id});
      }
    }]
  }
});
