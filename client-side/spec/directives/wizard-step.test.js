describe('wizard-step directive test', function () {

    var playgroundElement = document.getElementById('playground'),
        html = testHelpers.loadSync('/spec/html/wizards.html'),
        wizardsElement;

    beforeEach(function () {
        playgroundElement.innerHTML = html;
        wizardsElement = document.getElementById('wizards'),
        angular.bootstrap(wizardsElement, ['horizon']);
    });

    afterEach(function () {
        playgroundElement.innerHTML = '';
    });

    it('click launch wizard button shoule popup wizard', function () {
        // Jasmine 2.0 new async API is not available 

        // TODO: enable this test.
        // setTimeout(function () {
        //     done();
        // }, 0);

        // expect($('#wizard-1').hasClass('ng-hide')).toBe(true);
        // $('#button-1').click();
        // expect($('#wizard-1').hasClass('ng-hide')).toBe(false);
    });
});