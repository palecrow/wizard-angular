(function () {
  'use strict';

  var module = angular.module('hz.framework.wizard');

  module.controller('WizardCtrl', [
    '$scope',
    '$modalInstance',
    function ($scope, $modalInstance) {
      $scope.finish = function () {
        $modalInstance.close();
      };
      $scope.cancel = function () {
        $modalInstance.dismiss();
      };
    }
  ]);

}());