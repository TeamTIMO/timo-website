/* global angular */
;(function () {
  angular.module('timowebsite', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', 'timowebsiteDataProvider', function ($routeProvider, timowebsiteDataProvider) {
      timowebsiteDataProvider.setURLData('http://localhost/data')
      timowebsiteDataProvider.setURLSettings('http://localhost/settings')
      $routeProvider
        .when('/start', {
          controller: 'timowebsite-Start',
          controllerAs: 'ctrl',
          templateUrl: 'start'
        })
        .when('/cards', {
          controller: 'timowebsite-Cards',
          controllerAs: 'ctrl',
          templateUrl: 'cards'
        })
        .when('/settings', {
          controller: 'timowebsite-Settings',
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
