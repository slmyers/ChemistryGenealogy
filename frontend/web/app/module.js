var app = angular.module('chemGeno', ['ngMaterial', 'ui.router', 'angular-storage'])
          .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('indigo')
              .accentPalette('light-blue');
          });
