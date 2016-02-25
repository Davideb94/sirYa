(function (angular) { 'use strict';

    /**
     * Core
     */
    angular.module('sirya.core.endpoints', [
        'sirya.core.endpoints.rest',
        'sirya.core.endpoints.socket'
    ]);
})(window.angular);
