(function () {
  'use strict';

  function A_Ctrl($scope, events) {

    function launchInstance() {
      $scope.$broadcast(events.OPEN_LAUNCH_INSTANCE_WIZARD_EVENT);
    }

    $scope.launchInstance = launchInstance;
  }

  angular.module('hz').controller('A_Ctrl', [
    '$scope',
    'events',
    A_Ctrl
  ]);

})();