(function () {
 'use strict';

  var app = angular.module('hz', []);

  app.constant('events', {
    OPEN_LAUNCH_INSTANCE_WIZARD_EVENT: 'OPEN_LAUNCH_INSTANCE_WIZARD_EVENT'
  });

  app.factory('workflows', ['events', function (events) {

    return {

      'launch-instance': {

        title: 'Launch Instance',

        steps: [
          { title: 'Step 1', url: "/html/step1.html" },
          { title: 'Step 2', url: "/html/step2.html" },
          { title: 'Step 3', url: "/html/step3.html" },
          { title: 'Step 4', url: "/html/step4.html" }
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

})();