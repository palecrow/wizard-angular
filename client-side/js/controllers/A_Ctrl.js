;(function () {
    'use strict';

    function A_Ctrl($scope, events) {

        function showWizard() {
            $scope.$broadcast(events.WIZARD_OPEN);
        }

        $scope.showWizard = showWizard;
    }

    function B_Ctrl($scope, events) {

        function showWizard() {
            $scope.$broadcast(events.WIZARD_OPEN);
        }

        $scope.showWizard = showWizard;
    }

    angular.module('horizon').controller('A_Ctrl', [
        '$scope',
        'events',
        A_Ctrl
    ]);

    angular.module('horizon').controller('B_Ctrl', [
        '$scope',
        'events',
        B_Ctrl
    ]);

})();