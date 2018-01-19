/* global angular */
;(function () {
  angular.module('timowebsite')
    .controller('timowebsite-Settings', ['$scope', 'timowebsiteDataProvider', function ($scope, timowebsiteDataProvider) {
      var self = this
      self.loading = true
      self.settings = []
      self.loadItems = function () {
        timowebsiteDataProvider.settings().then(function (settings) {
          self.settings = settings.data
          for (var i = 0; i < self.settings.length; i++) {
            self.settings[i].saving = false
            self.settings[i].changed = false
            self.settings[i].save = function () {
              self.settings[i].saving = true
              timowebsiteDataProvider.saveSetting(self.settings[i].key, self.settings[i].value).then(function () {
                self.settings[i].saving = false
                self.settings[i].changed = false
              })
            }
          }
          self.loading = false
        })
      }
    }])
}())
