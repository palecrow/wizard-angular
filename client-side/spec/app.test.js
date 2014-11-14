describe('Unit testing Horizon', function() {
    var app = angular.module('horizon');

    it('module "horizon" should be defined', function () {
        expect(app).toBeDefined();
    });

    it("constant 'events' should be defined", function () {
        app.run(['events', function (events) {
            expect(events).toBeDefined();
        }]);
    });

    it("constant 'events.WIZARD_OPEN' should be defined", function () {
        app.run(['events', function (events) {
            expect(events.WIZARD_OPEN).toBeDefined();
        }]);
    });
});