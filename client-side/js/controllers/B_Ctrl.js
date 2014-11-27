;(function () {
    'use strict';

    function B_Ctrl($scope, events) {

        function showWizard() {
            $scope.$broadcast(events.WIZARD_OPEN);
        }

        $scope.showWizard = showWizard;
    }

    angular.module('hz').controller('B_Ctrl', [
        '$scope',
        'events',
        B_Ctrl
    ]);

})();