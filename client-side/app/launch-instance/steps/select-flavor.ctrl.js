(function () {
 'use strict';

  function SelectFlavorCtrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz.app.launch-instance').controller('SelectFlavorCtrl', [
    '$scope',
    SelectFlavorCtrl
  ]);

})();