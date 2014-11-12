;(function () {
    'use strict';

    var app = angular.module('horizon', []);

    app.constant('events', {
        WIZARD_CLOSE: 'WIZARD_CLOSE',
        WIZARD_OPEN: 'WIZARD_OPEN'
    });

})();