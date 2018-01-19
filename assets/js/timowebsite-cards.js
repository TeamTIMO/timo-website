/* global angular */
;(function () {
  angular.module('timowebsite')
    .controller('timowebsite-Cards', ['$scope', 'timowebsiteDataProvider', '$uibModal', function ($scope, timowebsiteDataProvider, $uibModal) {
      var self = this
      self.loading = true
      self.items = []
      self.loadItems = function () {
        timowebsiteDataProvider.entries().then(function (items) {
          self.items = items.data
          self.loading = false
        })
      }
      self.addItem = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'new-card',
          controller: 'timowebsite-New-Card',
          controllerAs: 'ctrl',
          size: 'lg'
        })
        modalInstance.result.then(function (item) {
          self.loading = true
          self.saveItem(item).then(function () {
            self.loading = false
          })
        })
      }
      self.writeCard = function (item) {
        $uibModal.open({
          animation: true,
          templateUrl: 'write-card',
          controller: 'timowebsite-Write-Card',
          controllerAs: 'ctrl',
          size: 'lg',
          resolve: {
            item: function () {
              return item
            }
          }
        })
      }
      self.saveItem = function (item) {
        return timowebsiteDataProvider.saveEntry(item)
      }
    }])
}())
