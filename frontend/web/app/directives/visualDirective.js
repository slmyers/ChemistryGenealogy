angular.module('chemGeno')
.directive('searchVisual', ['searchService', function(searchService) {
  return {
    restrict: 'E',
    scope: {},
    link: function(scope, element, attrs) {
      var svg = d3.select(ele[0])
        .append('svg')
        .style('width', '100%')
        .style('height', '100%');
    }
  }
}]);
