/**
 *
 * Status: service
 * Associated files: userDialogController, userController.
 *
 */

angular.module('chemGeno')
.service('loginService', function(store, $q, $http, $state) {
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
     *  Obtain from local storage the value of the userNamespace key.
     * @returns {*} The value of the current user
     */
      var getUser = function() {
        return store.get(userNamespace);
      };

    /**
     * An http call wrapped in a promise. upon success will store the user data in
     * local storage.
     *
     * @param user A user of the app.
     * @returns {*} A promise that encapsulates the server response.
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
        if ($state.$current.name !== 'main.search') {
          $state.go('main.search');
        }
      };

    /**
     * exposes the various functions.
     */
      return  {
        userLoggedIn: userLoggedIn,
        login: login,
        getUser: getUser,
        logout: logout
      };
});
