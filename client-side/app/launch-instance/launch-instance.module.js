(function () {
 'use strict';

  var module = angular.module('hz.app.launch-instance', [
  ]);

  module.run(['workflowManager', 'events', function (workflowManager, events) {
    workflowManager.registerWorkflow('launch-instance', {
      
      title: 'Launch Instance',

      steps: [
        { title: 'Select Source', url: "/app/launch-instance/steps/select-source.tpl.html",
          helpUrl: "/app/launch-instance/steps/select-source.help.html" },

        { title: 'Select Flavor', url: "/app/launch-instance/steps/select-flavor.tpl.html",
          helpUrl: "/app/launch-instance/steps/select-flavor.help.html" },

        { title: 'Network', url: "/app/launch-instance/steps/network.tpl.html",
          helpUrl: "/app/launch-instance/steps/network.help.html" },

        { title: 'Access and Security', url: "/app/launch-instance/steps/access-and-security.tpl.html",
          helpUrl: "/app/launch-instance/steps/access-and-security.help.html" },

        { title: 'Post Creation', url: "/app/launch-instance/steps/post-creation.tpl.html",
          helpUrl: "/app/launch-instance/steps/post-creation.help.html" },
      ],

      btnDisplayText: {
        cancel: 'Cancel',
        next: 'Next',
        back: 'Back',
        finish: 'Launch Now'
      },

      openEventName: events.OPEN_LAUNCH_INSTANCE_WIZARD_EVENT

    });
  }]);

})();