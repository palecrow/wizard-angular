(function () {
  'use strict';

  function Step2_Ctrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz').controller('Step2_Ctrl', [
    '$scope',
    Step2_Ctrl
  ]);

})();