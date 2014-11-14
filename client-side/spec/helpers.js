var testHelpers = testHelpers || {};

;(function (helps) {

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

    // export
    helps.loadSync = loadSync;

})(testHelpers);