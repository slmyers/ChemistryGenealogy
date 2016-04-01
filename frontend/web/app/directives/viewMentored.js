/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('viewMentored', function(){
  return {
    restrict: 'E',
    scope: {
      data: '=',
      links: '='
    },
    templateUrl: '/app/views/viewMentored.html',
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.goNext = function(mentored) {
        console.log(mentored);
        $state.go('main.view', {id: mentored.mentored.person.id});
      }
    }]
  }
});
