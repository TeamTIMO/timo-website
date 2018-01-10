/* global angular */
;(function () {
  angular.module('timowebsite')
      .provider('timowebsiteDataProvider', function timowebsiteDataProvider () {
        var restURLData = '/'
        this.setURLData = function (url) {
          restURLData = url
        }
        var restURLSettings = '/'
        this.setURLSettings = function (url) {
          restURLSettings = url
        }
        var restURLPlayer = '/'
        this.setURLPlayer = function (url) {
          restURLPlayer = url
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
            },
            settings: function () {
              return $http({
                method: 'GET', url: restURLSettings + '/'
              })
            },
            saveSetting: function (key, value) {
              return $http({
                method: 'PUT',
                url: restURLSettings + '/' + key,
                data: value,
                headers: {
                  'Content-Type': 'text/plain'
                }
              })
            },
            playerNow: function () {
              return $http({
                method: 'GET', url: restURLPlayer + '/now'
              })
            },
            playerPlayPause: function () {
              return $http({
                method: 'PUT', url: restURLPlayer + '/playpause'
              })
            },
            playerStop: function () {
              return $http({
                method: 'PUT', url: restURLPlayer + '/stop'
              })
            },
            playerVolUp: function () {
              return $http({
                method: 'PUT', url: restURLPlayer + '/volup'
              })
            },
            playerVolDown: function () {
              return $http({
                method: 'PUT', url: restURLPlayer + '/voldown'
              })
            },
            playerPlayThis: function (entry) {
              return $http({
                method: 'POST', url: restURLPlayer + '/playthis', data: entry
              })
            }
          }
        }
      })
}())
