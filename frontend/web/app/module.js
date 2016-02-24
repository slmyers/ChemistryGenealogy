/**
 * Modules are the containers of the different parts of our application. Like controllers,
 *
 *
 * For more on what a module is:
 * https://docs.angularjs.org/guide/module
 */
var app = angular.module('chemGeno', ['ngMaterial', 'ui.router', 'angular-storage'])
          .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('blue')
              .accentPalette('deep-purple');
          });
