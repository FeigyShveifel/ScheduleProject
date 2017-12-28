(function () {
    'use strict';
    angular.module('SlApp.filter', []);
    angular.module('SlApp.route', []);
    angular.module('SlApp.home', []);
    angular.module('SlApp.schedule', []);
    angular.module('SlApp.clock', []);
    angular.module('SlApp.time', []);
    angular.module('SlApp.login', []);

    angular.module('SlApp', [
        // Angular modules 
       
        'ds.clock', 'ui.bootstrap', 'ngAnimate', 'ngRoute',
        'SlApp.route',
        'SlApp.route',
        'SlApp.time',
        // Custom modules 
        'SlApp.home',
        'SlApp.schedule',
        'SlApp.clock',
        'SlApp.login'
        // 3rd Party Modules
        
    ]);
})();