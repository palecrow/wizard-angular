describe('app module tests', function() {

  beforeEach(module('hz'));

  it('should define module "hz"', function () {
    expect(angular.module('hz')).toBeDefined();
  });

  /**
   * constant "events"
   */
  it('should define constant "events"', inject(function (events) {
    expect(events).toBeDefined();
  }));

  it('should define constant "events.WIZARD_OPEN"', inject(function (events) {
    expect(events.WIZARD_OPEN).toBeDefined();
  }));

});