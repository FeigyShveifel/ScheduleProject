/// <reference path="login/login.tmpl.html" />
(function () {
    'use strict';

    angular
        .module('SlApp')
        .controller('indexctrl', indexctrl);

    indexctrl.$inject = ['$scope','$window' ,'$location' ];

    function indexctrl($scope,$window,$location) {
        /* jshint validthis:true */
        
        var vm = this;
        vm.title = 'index';
        if (!localStorage.getItem("User"))
            $window.location.href = "login/login.tmpl.html";
        $scope.Route = function (name)
        {
            $location.path(name);
        };
        activate();

        function activate() { }
    }
})();
