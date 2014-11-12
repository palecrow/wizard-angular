;(function () {
    'use strict';

    var CURRENT_STEP_CSS_NAME = 'current',
        WIZARD_IS_OPEN_CSS_NAME = 'open';

    function wizardDirectiveFactory() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/html/wizard.html',
            link: function(scope, element, attrs, controllers) {
                var opened = false,
                    contentContainer = angular.element(element[0].children[1]),
                    currentIndex = 0,
                    steps = contentContainer[0].children,
                    stepsCount = contentContainer[0].childElementCount;
                
                element.addClass(WIZARD_IS_OPEN_CSS_NAME);

                function unsetCurrent() {
                    angular.element(steps[currentIndex]).removeClass(CURRENT_STEP_CSS_NAME);
                }

                function setCurrent() {
                    angular.element(steps[currentIndex]).addClass(CURRENT_STEP_CSS_NAME);
                }

                scope.back = function () {
                    unsetCurrent();
                    currentIndex = Math.max(currentIndex - 1, 0);
                    setCurrent();
                }

                scope.next = function () {
                    unsetCurrent();
                    currentIndex = Math.min(currentIndex + 1, stepsCount - 1);
                    setCurrent();
                }

                scope.open = function () {
                    unsetCurrent();
                    currentIndex = 0;
                    setCurrent();
                    element.addClass(WIZARD_IS_OPEN_CSS_NAME);
                }

                scope.cancel = function () {
                    element.removeClass(WIZARD_IS_OPEN_CSS_NAME);
                }
            }
        };
    }

    angular.module('horizon').directive('wizard', wizardDirectiveFactory);

})();