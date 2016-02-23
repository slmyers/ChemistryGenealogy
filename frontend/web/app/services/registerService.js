/**
 * Register Service
 *
 * Status: SERVICE
 * Associated files: userDialogController
 *
 * The Register service is associated with storing and handling the local information services in the app.
 *
 *
 */

angular.module('chemGeno')
.service('registerService', function(store, $q, $http) {
  /**
   * http request to the user route that is wrapped in a promise
   *
   * @param user A user object to register in our application.
   * @returns {*} Returns a promise associated with the registration of the user.
   */
  var register = function(user) {
    var d = $q.defer();
    return $http({
      header: 'Content-Type: application/json',
      method: 'POST',
      url: 'http://localhost:3000/api/user',
      data: {email: user.email, password: user.password, first_name: user.firstName, last_name: user.lastName}
    }).success( function(res){
      console.log('success');
      console.log(res);
      d.resolve(res.user);
    }).error( function(res){
      d.reject(res.error);
    });
    return d.promise;
  }

  /**
   * exposes the register function
   */
  return {
    register: register
  };
});
