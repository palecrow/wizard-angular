(function () {
  'use strict';

  function link($scope, element, attrs) {
    console.log('link in directive');

    if (!attrs.workflow) {
      console.error('"workflow" attribute must be defined for <wizard> tag.');
      return;
    }
    $scope.init(attrs.workflow);
  }

  function controller($scope, workflowManager) {
    console.log('controller in directive');

    var steps;

    function reset() {
      steps.forEach(function (step) {
        step.valid = false;
        step.done = false;
      });
      $scope.currentIndex = 0;
      $scope.openHelp = false;
    }

    function init(workflowAttrValue) {
      var workflow = workflowManager.getWorkflow(workflowAttrValue);

      if (!workflow) {
        console.error('Workflow with name "' + workflowAttrValue + '" is not defined.');
        return;
      }

      $scope.title = workflow.title;
      $scope.btnDisplayText = workflow.btnDisplayText;
      steps = $scope.steps = workflow.steps;
      $scope.$on(workflow.openEventName, open);

      reset();
    }

    function open() {
      reset();
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
      $scope.openHelp = false;
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

    $scope.init = init;
    $scope.switchTo = switchTo;
    $scope.isFirstStep = isFirstStep;
    $scope.isLastStep = isLastStep;
    $scope.isCurrent = isCurrent;
    $scope.next = next;
    $scope.back = back;
    $scope.allValid = allValid;
    $scope.shouldShow = shouldShow;
  }

  function wizardDirectiveFactory() {
    return {
      controller: ['$scope', 'workflowManager', controller],
      link: link,
      replace: true,
      templateUrl: '/framework/wizard/wizard.tpl.html'
    };
  }

  angular.module('hz.framework.wizard').directive('wizard', [
    wizardDirectiveFactory
  ]);

}());