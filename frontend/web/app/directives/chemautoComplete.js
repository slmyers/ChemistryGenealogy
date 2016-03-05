angular.module('chemGeno')
// avoid any namespace clobbering
.directive('chemautoComplete', function($parse){
  return {
    restrict: 'E',
    scope: {
      type: '='
    },
    templateUrl: function(elem, attr){
      return '/app/views/chemauto' + attr.type +'.html';
    },
    controller: function($scope) {
      $scope.selectedItem = {};
      $scope.searchText = {};

      this.queryNameSearch = function(name){
        console.log('in querySearch ' + name)
        var d = $q.defer();
        $http({
          method: 'GET',
          url: 'localhost:3000/autocomplete',
          params: name
        }).then(function (result){
          console.log(result)
          d.resolve(result.data);
        });
        return d.promise;
      }
    }
  }
});
