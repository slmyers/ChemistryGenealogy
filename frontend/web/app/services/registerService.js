/**
 * Register Service
 *
 * Status: SERVICE
 * Associated files:
 *
 * The Register service is associated with storing and handling the local information services in the app.
 *
 *
 */

angular.module('chemGeno')
.service('registerService', function(store, $q, $http) {
        //Sanity check that we have the returned field is exactly as we'd expect.
        var _checkReturnedFields = function(returnedUsername, inputUser) {
          if(returnedUsername !== inputUser.username) {
            return false;
          }
          return true;
        };

    /**
     * A registration function service that will be involved with the actual in depth placement of the user into the
     * system.
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
            if(!_checkReturnedFields(res.username, user)){
              d.reject({error: "expected returned username: " + user.username + " got: " + res.data.username})
            } else {
              d.resolve(res.user);
            }

          }).error( function(res){
            d.reject(res.error);
          });
          return d.promise;
        }

    /**
     * Return the register object as being (successfully) "register"ed)
     */
        return {
          register: register
        };
});
