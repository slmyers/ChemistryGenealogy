/**
 * Controller for the User Dialogue
 *
 * Status: CONTROLLER
 * Associated files: userDialog.html,
 *
 * The user dialog controller is associated with registration and submission of login information. So it is
 * slightly associated with the User Controller (userController.js), yet is kept distinct for clarity of functions.
 *
 *
 */

angular.module('chemGeno')
.service('loginService', function(store, $q, $http) {


      var userNamespace = '401ChemGenoUser'

    /**
     * When evoked will check if the user can be obtained, if the user is not equal to null we must have a user logged
     * into our app. Otherwise return false (if null), as we do not have a user.
     *
     * @returns {boolean} If the user is logged in (true) or not (false).
     */
      var userLoggedIn = function() {
       if (getUser() !== null) {
          return true;
        } else {
          return false;
        }
      };

    /**
     *  Obtain from the store (What?) the value of the userNamespace.
     * @returns {*} The value of the current user
     */
      var getUser = function() {
        return store.get(userNamespace);
      };

    /**
     * A service function that when invoked will attempt to log the user in. If it succeeds then we set the store
     * to the user, else we will send an error back to the user of the app.
     *
     * @param user A user of the app.
     * @returns {*} The promise of the user being logged in.
     */
      var login = function(user) {
        var d = $q.defer();
        return $http({
          header: 'Content-Type: application/json',
          method: 'POST',
          url: 'http://localhost:3000/authenticate',
          data: {email: user.email, password: user.password}
        }).success(function(resp) {
          store.set(userNamespace, resp);
          d.resolve(resp.user);
        }).error(function(resp) {
          console.log(resp);
          d.reject(resp.error);
        });
        return d.promise;
      };

    /**
     * Logs out the user, by removing the
     * Local storage for the store. Eg: if we're in chrome and we went to the cosnole and the resources then we'll find something on localhost:5000 then we'll see it there.
     * tl;dr: Store is the local storage within the user's browser of the application that is being used.
     * This function removes this person from this local storage.
     */
      var logout = function() {
        store.remove(userNamespace);
      };

    /**
     * A bunch of return stuff (???????????) that will state what is going on with the state of the application.
     */
      return  {
        userLoggedIn: userLoggedIn,
        login: login,
        getUser: getUser,
        logout: logout
      };
});
