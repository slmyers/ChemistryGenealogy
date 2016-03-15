angular.module('chemGeno')
.controller('searchController', ['$scope', 'searchService',
  function($scope, searchService) {
   $scope.target = [];
   $scope.mentors = [];
   $scope.mentored = [];
   $scope.supervisors = [];
   $scope.supervised = [];

   // probably should've just put institutions with people
   $scope.$on('search:response', function(event,data) {
     $scope.clearResults();
     console.log(data);

      var targetInstitution =
          $scope.findInstitution(data.target.institution_id, data.institutions);
      var _target = {
        name: data.target.name,
        institution: targetInstitution,
        position: data.target.position
      };
      $scope.target.push(_target);
      // TODO: refactor method into sub methods
      var toPush = [];
      for(var i = 0; i < data.mentors.length; i++) {
        var _mentor_ = data.mentors[i];
        var inst = $scope.findInstitution(_mentor_.institution_id,
          data.institutions);

        var mentor = {
          name: _mentor_.name,
          institution: inst,
          position: _mentor_.position
        };
        toPush.push(mentor)
      }
      $scope.mentors = toPush;

      var toPush = [];
      for(var i = 0; i < data.mentored.length; i++) {
        var _mentor_ = data.mentored[i];
        var inst = $scope.findInstitution(_mentor_.institution_id,
          data.institutions);

        var mentor = {
          name: _mentor_.name,
          institution: inst,
          position: _mentor_.position
        };
        toPush.push(mentor)
      }
      $scope.mentored = toPush;

      var toPush = [];
      for(var i = 0; i < data.supervised.length; i++) {
        var _supervisor_ = data.supervised[i];
        var inst = $scope.findInstitution(_supervisor_.institution_id,
          data.institutions);

        var mentor = {
          name: _supervisor_.name,
          institution: inst,
          position: _supervisor_.position
        };
        toPush.push(_supervisor_)
      }
      $scope.supervised = toPush;

      var toPush = [];
      for(var i = 0; i < data.supervisors.length; i++) {
        var _supervisor_ = data.supervisors[i];
        var inst = $scope.findInstitution(_supervisor_.institution_id,
          data.institutions);

        var mentor = {
          name: _supervisor_.name,
          institution: inst,
          position: _supervisor_.position
        };
        toPush.push(_supervisor_)
      }
      $scope.supervisors = toPush;

   });

   $scope.findInstitution = function(id, institutions) {
     for(var i = 0; i < institutions.length; i++){
       if (institutions[i].id === id) {
         return institutions[i].name;
       }
     }
   }

   $scope.clearResults = function() {
     $scope.target = [];
     $scope.mentors = [];
     $scope.mentored = [];
     $scope.supervisors = [];
     $scope.supervised = [];
   }

  }
]);
