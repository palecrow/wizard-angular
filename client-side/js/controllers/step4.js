(function () {
  'use strict';

  function Step4_Ctrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz').controller('Step4_Ctrl', [
    '$scope',
    Step4_Ctrl
  ]);

})();