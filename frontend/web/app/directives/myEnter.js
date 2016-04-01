/**
 *  @author Steven Myers
 */
angular.module('chemGeno')
.directive('myEnter',
function(scope, element, attrs){
  return element.bind("keydown keypress", function (event) {
    if(event.which === 13) {
      scope.$apply(function () {
        console.log('enter');
      });
      event.preventDefault();
    }
  });
});
