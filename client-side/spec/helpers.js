var testHelpers = testHelpers || {};

;(function (exports) {

    'use strict';

    /**
     * Synchronously load text from url
     */
    function loadSync(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); 
        xhr.send();
        return xhr.status === 200 ? xhr.responseText : null;
    }

    function cacheTemplate(templateUrl, moduleName) {
        angular.module(moduleName).run(function($templateCache) {
            $templateCache.put(templateUrl, testHelpers.loadSync(templateUrl));
        });
    }

    // export
    exports.loadSync = loadSync;
    exports.cacheTemplate = cacheTemplate;

})(testHelpers);