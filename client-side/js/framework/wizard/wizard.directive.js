(function () {
  'use strict';

  function link($scope, element, attrs, workflows) {
    if (!attrs.workflow) {
      console.error('"workflow" attribute must be defined for <wizard> tag.');
      return;
    }

    var workflow = workflows[attrs.workflow];

    if (!workflow) {
      console.error('Workflow with name "' + attrs.workflow + '" must be defined.');
      return;
    }

    var steps = $scope.steps = workflow.steps;
    $scope.title = workflow.title;
    $scope.btnDisplayText = workflow.btnDisplayText;

    reset();

    function reset() {
      steps.forEach(function (step) {
        step.valid = false;
        step.done = false;
      });
      $scope.currentIndex = 0;
      $scope.canceled = false;
      $scope.allDone = false;
      $scope.forcedOpen = false;
      $scope.openHelp = false;
    }

    function open() {
      reset();
      $scope.forcedOpen = true;
    }

    function cancel() {
      $scope.canceled = true;
      $scope.forcedOpen = false;
    }

    function finish() {
      $scope.allDone = true;
      $scope.forcedOpen = false;
    }

    function switchTo(index) {
      var i, currentIndex = $scope.currentIndex;

      if (index === currentIndex) {
        return;
      }

      if (index < currentIndex) {
        for (i = index; i < currentIndex; i++) {
          steps[i].done = false;
        }
      } else {
        for (i = currentIndex; i < index; i++) {
          steps[i].done = true;
        }
      }
      $scope.currentIndex = index;
      steps[index].done = false;
    }

    function isFirstStep() {
      return $scope.currentIndex === 0;
    }

    function isLastStep() {
      return $scope.currentIndex === steps.length - 1;
    }

    function isCurrent(index) {
      return $scope.currentIndex === index;
    }

    function next() {
      switchTo($scope.currentIndex + 1);
    }

    function back() {
      switchTo($scope.currentIndex - 1);
    }

    function allValid() {
      return steps.every(function (step) {
        return step.valid;
      });
    }

    function shouldShow(index) {
      return (!steps[index - 1] || steps[index - 1].done) &&
        !steps[index].done;
    }

    $scope.switchTo = switchTo;
    $scope.isFirstStep = isFirstStep;
    $scope.isLastStep = isLastStep;
    $scope.isCurrent = isCurrent;
    $scope.next = next;
    $scope.back = back;
    $scope.finish = finish;
    $scope.cancel = cancel;
    $scope.allValid = allValid;
    $scope.shouldShow = shouldShow;

    $scope.$on(workflow.openEventName, open);
  }

  function wizardDirectiveFactory(workflows) {
    return {
      link: function ($scope, element, attrs) {
        link($scope, element, attrs, workflows);
      },
      replace: true,
      templateUrl: '/html/wizard.html'
    };
  }

  angular.module('hz.framework.wizard').directive('wizard', [
    'workflows',
    wizardDirectiveFactory
  ]);

})();