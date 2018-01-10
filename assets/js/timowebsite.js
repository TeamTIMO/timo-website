/* global angular */
;(function () {
  angular.module('timnowebsite', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/start', {
          controller: 'timnowebsite-Start',
          controllerAs: 'ctrl',
          templateUrl: 'start'
        })
        .when('/cards', {
          controller: 'timnowebsite-Cards',
          controllerAs: 'ctrl',
          templateUrl: 'cards'
        })
        .when('/settings', {
          controller: 'timnowebsite-Settings',
          controllerAs: 'ctrl',
          templateUrl: 'settings'
        })
        .otherwise({ redirectTo: '/start' })
    }])
    .run(['$rootScope', '$location', function ($rootScope, $location) {
      $rootScope.isActive = function (viewLocation) { // eslint-disable-line
        return viewLocation === $location.path()
      }
    }])
}())
