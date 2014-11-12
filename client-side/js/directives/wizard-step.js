;(function () {
    'use strict';

    function wizardStepDirectiveFactory() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/html/wizard-step.html'
        };
    }

    angular.module('horizon').directive('wizardstep', wizardStepDirectiveFactory);

})();