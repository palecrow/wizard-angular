(function () {
  'use strict';

  function Step1_Ctrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz.app.launch-instance').controller('Step1_Ctrl', [
    '$scope',
    Step1_Ctrl
  ]);

})();