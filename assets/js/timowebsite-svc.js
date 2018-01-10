/* global angular */
;(function () {
  angular.module('timowebsite')
      .provider('timowebsiteDataProvider', function timowebsiteDataProvider () {
        var restURLData = '/' // TODO: add data service
        this.setURLData = function (url) {
          restURLData = url
        }
        this.$get = function ($http) {
          return {
            entries: function () {
              return $http({
                method: 'GET', url: restURLData + '/'
              })
            },
            saveEntry: function (entry) {
              if (entry.id && entry.id !== '#') {
                return $http({
                  method: 'PUT', url: restURLData + '/' + entry.id, data: entry
                })
              } else {
                return $http({
                  method: 'POST', url: restURLData + '/', data: entry
                })
              }
            },
            deleteEntry: function (id) {
              return $http({
                method: 'DELETE', url: restURLData + '/' + id
              })
            }
          }
        }
      })
}())
