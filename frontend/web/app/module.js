var app = angular.module('chemGeno', ['ngMaterial', 'ui.router'])
          .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('indigo')
              .accentPalette('light-blue');
          });
