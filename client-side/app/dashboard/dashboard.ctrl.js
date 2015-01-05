(function () {
  'use strict';

  function DashboardCtrl($scope, events) {

    function launchInstance() {
      console.log('launchInstance button was clicked');
      $scope.$broadcast(events.OPEN_LAUNCH_INSTANCE_WIZARD_EVENT);
    }

    $scope.launchInstance = launchInstance;
  }

  angular.module('hz.app.dashboard').controller('DashboardCtrl', [
    '$scope',
    'events',
    DashboardCtrl
  ]);

})();