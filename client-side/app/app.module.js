(function () {
 'use strict';

  var module = angular.module('hz.app', [
    'hz.app.dashboard',
    'hz.app.launch-instance'
  ]);

  module.constant('events', {
    OPEN_LAUNCH_INSTANCE_WIZARD_EVENT: 'OPEN_LAUNCH_INSTANCE_WIZARD_EVENT'
  });

})();