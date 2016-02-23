angular.module('chemGeno')
.service('personService', function($q, $http, loginService) {

  // this is not the ideal function to use... there will be too much work
  // caused on backend -- lots of joins and updates.
  var getUserId = function() {
    return loginService.getUser().user.id;
  }

  /*  example person data structure
      {
        name: 'Steven Myers',
        position: 'associate professor',
        this is an object because it needs to be saved to it's own model
        institution: {
          name: 'University of Alberta'
        },
        // this is an array with the mentor and postdoc tied together
        postdoc:
          [
            mentor: {
              name: 'Eleni Stroulia'
            },
            {
              start: 2014,
              end: 2016,
              institution: 'University of Alberta'
            }
          ]
        ,
        degree: {
          supervisor: 'Meysam Feghhi',
          year: '2014',
        }
      }

      typings:
      {
        name: string,
        positiion: string,
        institution: object,
          insitiution.name: string
        postdoc: array<MentorObj,postDocObj>
          mentor.name: string,
          postdoc.start: int,
          postdoc.end: int,
          postdoc.insitiution: string
        degree: {
          supervisor: string,
          year: int
        }
      }

      you'll notice that some of the fields are missing when compared to the data model,
      this is most likely because these fields are foreign keys, so one would save a model,
      then use it's foreign key (of the saved thing like person.institution) as a column
      in the person model
  */



  var submitPerson = function(person) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/person',
      data: {
        name: person.name,
        position: person.position,
        insitiution : person.insitiution,
        postdoc : person.postdoc,
        degree: person.degree
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('submitPersonService.submitPerson error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  };

  // might be inefficient?? on the backend
  var updatePerson = function(person) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: 'http://localhost:3000/api/person/' + person.id.toString(),
      data: {
        user: getUserId(),
        name: person.name,
        position: person.position,
        insitiution : person.insitiution,
        postdoc : person.postdoc,
        degree: person.degree
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('updatePersonService.updatePerson error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  }

/**************************************************************************************
 * these methods are an idea i'm floating around. I think it will be more efficient   *
 * to update only one row in the db if only one thing changed, ie, only the person's  *
 * name was changed, so then we only need to update the name on the db end, but if we *
 * include the whole person object then every column in the person might end up being *
 * written to when only 1 thing might have changed? I'm rusty on my SQL/db stuff so   *
 * this should be investigated.                                                       *
 **************************************************************************************/

  // update the institution in the person table
  // NOTE: must check to see if institution exists on backend and create if
  // it does not.
  var updatePersonInstitution = function(person) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: 'http://localhost:3000/api/person/' + person.id.toString(),
      data: {
        user: getUserId(),
        insitiution : person.insitiution
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('updatePersonService.updatePerson error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  };

  var updatePersonName = function(person) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'PUT',
      url: 'http://localhost:3000/api/person/' + person.id.toString(),
      data: {
        user: getUserId(),
        name : person.name
      }
    }).success( function(res){
      d.resolve(res.user);
    }).error( function(res){
      console.log('updatePersonService.updatePersonName error');
      console.log(res);
      d.reject(res.error);
    });
    return d.promise;
  }

  return {
    submitPerson: submitPerson,
    updatePerson: updatePerson
  }
});
