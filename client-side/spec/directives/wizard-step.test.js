describe('directive wizard-step tests', function () {
  var $compile,
      $scope;

  beforeEach(module('hz'));

  beforeEach(inject(function ($injector) {
    $scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');
  }));

  it('should have CSS class "step"', function () {
    var element = $compile('<wizardstep></wizardstep>')($scope);
    $scope.$digest();
    // console.log(element);
    expect(element.hasClass('step')).toBe(true);
  });

});