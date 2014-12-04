describe('app module tests:', function() {

  beforeEach(module('hz.app'));

  it('should define module "hz.app".', function () {
    expect(angular.module('hz.app')).toBeDefined();
  });

});