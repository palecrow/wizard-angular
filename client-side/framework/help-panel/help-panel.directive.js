(function () {
  'use strict';

  angular.module('hz.framework.help-panel').directive('helpPanel', [
    function () {
      return {
        replace: true,
        restrict: 'E',
        templateUrl: '/framework/help-panel/help-panel.tpl.html',
        transclude: true
      };
    }]);
}());