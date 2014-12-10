(function () {
 'use strict';

  function PostCreationCtrl($scope) {
    $scope.checked = false;
    $scope.$watch('checked', validate);

    function validate() {
      $scope.step.valid = $scope.checked;
    }
  }

  angular.module('hz.app.launch-instance').controller('PostCreationCtrl', [
    '$scope',
    PostCreationCtrl
  ]);

})();