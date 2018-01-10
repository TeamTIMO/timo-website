/* global angular */
;(function () {
  angular.module('timowebsite').directive('emitLastRepeaterElement', function () {
    return function (scope) {
      if (scope.$last) {
        scope.$emit('LastRepeaterElement')
      }
    }
  })
})()
