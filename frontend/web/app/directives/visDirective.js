angular.module('chemGeno')
.directive('dataVisual', function($parse, $window){
  return {
    restrict: 'E',
    template: "<svg width='{{estimatedVisW}}' height='{{estimatedVisH}}'></svg>"
  }
});
