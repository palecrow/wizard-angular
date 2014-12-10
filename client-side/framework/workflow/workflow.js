(function () {
  'use strict';

  var workflowManager = (function () {
    var workflows = {};

    function getWorkflow(name) {
      return workflows[name];
    }

    function registerWorkflow(name, workflow) {
      workflows[name] = workflow;
    }

    return {
      getWorkflow: getWorkflow,
      registerWorkflow: registerWorkflow
    };

  })();

  angular.module('hz.framework.workflow').value('workflowManager', workflowManager);

})();