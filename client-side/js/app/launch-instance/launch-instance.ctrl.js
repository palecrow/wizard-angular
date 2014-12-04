(function () {
  'use strict';

  function LaunchInstanceCtrl($scope) {

    function submit() {
      setTimeout(function () {
        alert('Submitted.');
      }, 0);
    }

    $scope.submit = submit;
  }

  angular.module('hz.app.launch-instance').controller('LaunchInstanceCtrl', [
    '$scope',
    LaunchInstanceCtrl
  ]);

})();