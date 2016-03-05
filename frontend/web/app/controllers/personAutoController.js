angular.module('chemGeno')
.controller('personAutoController', ['$scope', 'autoService',
function($scope, autoService) {
  $scope.selectedItem;
  $scope.searchText = '';

  $scope.selectedItemChange = function selectedItemChange(item) {
    console.log('Item changed to ' + JSON.stringify(item));
  };

  $scope.queryNameSearch = function(name) {
    return autoService.autoPerson(name);
  }
}]);
