/**
 * @module searchController
 * @class searchController
 *
 * Entire Search Functionality located here.
 */

angular.module('chemGeno')
.controller('searchController', ['$scope', 'searchService', '$state',
  function($scope, searchService, $state) {
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
        position: data.target.position,
        id: data.target.id
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
          position: _mentor_.position,
          id: _mentor_.id
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
          position: _mentor_.position,
          id: _mentor_.id
        };
        toPush.push(mentor)
      }
      $scope.mentored = toPush;

      var toPush = [];
      for(var i = 0; i < data.supervised.length; i++) {
        var _supervisor_ = data.supervised[i];
        var inst = $scope.findInstitution(_supervisor_.institution_id,
          data.institutions);
        console.log(inst)
        var mentor = {
          name: _supervisor_.name,
          institution: inst,
          position: _supervisor_.position,
          id: _supervisor_.id
        };
        toPush.push(mentor)
      }
      $scope.supervised = toPush;

      var toPush = [];
      for(var i = 0; i < data.supervisors.length; i++) {
        var _supervisor_ = data.supervisors[i];
        var inst = $scope.findInstitution(_supervisor_.institution_id,
          data.institutions);
        console.log(inst)
        var mentor = {
          name: _supervisor_.name,
          institution: inst,
          position: _supervisor_.position,
          id: _supervisor_.id
        };
        toPush.push(mentor)
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
      /**
       * My work
       */


      $scope.goToView = function(person){
          console.log("goToView function called! :) ");
          //alert(person.id);
          console.log(person);
          $state.go('main.view', {id: person.id});

      };


   $scope.clearResults = function() {
     $scope.target = [];
     $scope.mentors = [];
     $scope.mentored = [];
     $scope.supervisors = [];
     $scope.supervised = [];
   }

  }
]);
