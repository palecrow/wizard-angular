;(function () {
    'use strict';

    var CURRENT_STEP_CSS_CLASSNAME = 'current',
        WIZARD_IS_OPEN_CSS_CLASSNAME = 'open',

        btnLabel = {
            cancel: 'Cancel',
            next: 'Next',
            back: 'Back',
            finish: 'Finish'
        };

    function wizardDirectiveFactory(events) {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/html/wizard.html',

            link: function(scope, element, attrs, controllers) {

                var opened = false,
                    contentContainer = angular.element(element[0].children[1].children[2]),
                    currentIndex = 0,
                    steps = contentContainer[0].children,
                    stepsCount = contentContainer[0].childElementCount;

                function unsetCurrent() {
                    angular.element(steps[currentIndex]).
                        removeClass(CURRENT_STEP_CSS_CLASSNAME);
                }

                function setCurrent() {
                    angular.element(steps[currentIndex]).
                        addClass(CURRENT_STEP_CSS_CLASSNAME);
                }

                function switchTo(index) {
                    unsetCurrent();
                    currentIndex = index;
                    setCurrent();
                    updateBtnState();
                }

                function updateBtnState() {
                    scope.backBtnDisabled = currentIndex === 0;
                    scope.isLastStep = currentIndex === stepsCount - 1;
                }

                function open() {
                    switchTo(0);
                    scope.show = true;
                }

                function close() {
                    scope.show = false;
                }

                function back() {
                    switchTo(Math.max(currentIndex - 1, 0));
                }

                function next() {
                    if (scope.isLastStep) {
                        close();
                    } else {
                        switchTo(Math.min(currentIndex + 1, stepsCount - 1));
                    }
                }

                function cancel() {
                    close();
                }

                scope.cancelBtnDisabled = false;
                scope.backBtnDisabled = false;
                scope.nextBtnDisabled = false;
                scope.isLastStep = false;
                scope.show = false;

                scope.open = open;
                scope.back = back;
                scope.next = next;
                scope.cancel = cancel;
                scope.btnLabel = btnLabel;

                scope.$on(events.WIZARD_OPEN, open);
            }
        };
    }

    angular.module('horizon').directive('wizard', [
        'events',
        wizardDirectiveFactory
    ]);

})();