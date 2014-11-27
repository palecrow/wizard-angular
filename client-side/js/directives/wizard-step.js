;(function () {
    'use strict';

    function wizardStepDirectiveFactory() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/html/wizard-step.html',

            link: function (scope, element, attrs, controllers) {

                // console.log(scope);

                // function open() {
                //     $parent.open();
                // }

                // function back() {
                //     $parent.back();
                // }

                // function next() {
                //     $parent.next();
                // }

                // function cancel() {
                //     $parent.cancel();
                // }

                // scope.open = open;
                // scope.back = back;
                // scope.next = next;
                // scope.cancel = cancel;
            }
        };
    }

    angular.module('hz').directive('wizardstep', wizardStepDirectiveFactory);

})();