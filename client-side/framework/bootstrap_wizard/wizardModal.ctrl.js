(function () {
  'use strict';

  var module = angular.module('hz.framework.wizard');

  module.value('launchInstanceWizardSpec', {
    template: '<wizard workflow="launch-instance" ng-controller="LaunchInstanceCtrl"></wizard>',
    controller: 'WizardCtrl',
    size: 'lg',
    resolve: {}
  });

  module.controller('LaunchInstanceWizardCtrl', [
    '$scope',
    '$modal',
    'launchInstanceWizardSpec',
    function ($scope, $modal, wizardSpec) {
      $scope.open = function () {
        $modal.open(wizardSpec);
      };
    }
  ]);

}());