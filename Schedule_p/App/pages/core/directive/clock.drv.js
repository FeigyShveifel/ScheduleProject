/// <reference path="../../pages/clock/clock.tmpl.html" />
(function() {
    'use strict';

    angular
        .module('SlApp')
        .directive('clockDrv', function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'clock/clock.tmpl.html'
            };

        });
   


})();