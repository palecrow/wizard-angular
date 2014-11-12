;(function () {
    'use strict';

    function LaunchInstanceCtrl($scope, events) {

        function lauchInstance() {
            $scope.$broadcast(events.WIZARD_OPEN);
        }

        $scope.lauchInstance = lauchInstance;
    }

    angular.module('horizon').controller('LaunchInstanceCtrl', [
        '$scope',
        'events',
        LaunchInstanceCtrl
    ]);

})();