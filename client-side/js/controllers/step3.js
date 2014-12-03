(function () {
  'use strict';

  function Step3_Ctrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz').controller('Step3_Ctrl', [
    '$scope',
    Step3_Ctrl
  ]);

})();