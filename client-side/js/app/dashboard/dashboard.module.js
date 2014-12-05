(function () {
  'use strict';

  var module = angular.module('hz.app.dashboard', []);

  module.constant('events', {
    OPEN_LAUNCH_INSTANCE_WIZARD_EVENT: 'OPEN_LAUNCH_INSTANCE_WIZARD_EVENT'
  });

  module.factory('workflows', ['events', function (events) {

    return {

      'launch-instance': {

        title: 'Launch Instance',

        steps: [
          { title: 'Step 1', url: "/html/launch-instance/step1.html",
            helpUrl: "/html/launch-instance/help/help-for-step1.html" },
          { title: 'Step 2', url: "/html/launch-instance/step2.html",
            helpUrl: "/html/launch-instance/help/help-for-step2.html" },
          { title: 'Step 3', url: "/html/launch-instance/step3.html",
            helpUrl: "/html/launch-instance/help/help-for-step3.html" },
          { title: 'Step 4', url: "/html/launch-instance/step4.html",
            helpUrl: "/html/launch-instance/help/help-for-step4.html" }
        ],

        btnDisplayText: {
          cancel: 'Cancel',
          next: 'Next',
          back: 'Back',
          finish: 'Launch Now'
        },

        openEventName: events.OPEN_LAUNCH_INSTANCE_WIZARD_EVENT
      }
    };

  }]);

}());