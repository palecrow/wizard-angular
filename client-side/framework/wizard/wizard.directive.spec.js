describe('hz.framework.wizard wizard.directive spec', function () {
  var $compile,
      $scope;

  beforeEach(module('hz'));

  beforeEach(inject(function ($injector) {
    $scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');
  }));

  it('should have CSS class name "wizard" and "modal".', function () {
    var element = $compile('<wizard workflow="launch-instance"></wizard>')($scope);
    $scope.$digest();
    expect(element.hasClass('wizard')).toBe(true);
    expect(element.hasClass('modal')).toBe(true);
  });

});