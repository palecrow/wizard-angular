;(function () {
    'use strict';

    function A_Ctrl($scope, events) {

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

})();