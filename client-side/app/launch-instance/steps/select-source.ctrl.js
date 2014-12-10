(function () {
 'use strict';

  function SelectSourceCtrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz.app.launch-instance').controller('SelectSourceCtrl', [
    '$scope',
    SelectSourceCtrl
  ]);

})();