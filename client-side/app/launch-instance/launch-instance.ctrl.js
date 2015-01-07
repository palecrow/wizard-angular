(function () {
  'use strict';

  function LaunchInstanceCtrl($scope, workflowManager) {
    console.log('Launch Instance Control');
  }

  angular.module('hz.app.launch-instance').controller('LaunchInstanceCtrl', [
    '$scope',
    'workflowManager',
    LaunchInstanceCtrl
  ]);

})();