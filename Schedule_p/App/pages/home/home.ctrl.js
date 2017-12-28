(function () {
    'use strict';

    angular
        .module('SlApp.home')
        .controller('homectrl', homectrl);

    homectrl.$inject = ['$scope','$location'];

    function homectrl($scope,$location) {
        $scope.title = 'home';
        $scope.isEnter = false;
        $scope.Enter = false;
        $scope.SaveEnter = function (entertime) {
            var count;
            if ($scope.Exit == false) {
                 count = localStorage.getItem('count') | 0;
                var currentEnter = [];
                if (count != 0)
                currentEnter = angular.fromJson(localStorage.getItem("hours"));
                var obj = { date: new Date(), time: entertime, status: 'Enter' };
                currentEnter.push(obj);
                localStorage.setItem("hours", angular.toJson(currentEnter));
                localStorage.setItem("count", count + 1);
               // localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Enter' }));
                $scope.start = new Date(entertime);
                $scope.isEnter = false;
                $scope.Exit = false;
                $scope.Enter = true;
                $scope.show = false;
            }
            else {
                $scope.sumh = new Date(entertime).getHours() - $scope.start.getHours();
                if ($scope.sumh < 0)
                    alert("enter correct time");
                else {
                    count = localStorage.getItem("count") ;
                    currentEnter = angular.fromJson(localStorage.getItem("hours"));
                    var obj = { date: new Date(), time: entertime, status: 'Exit', sumhour: $scope.sumh };
                    currentEnter.push(obj);
                    localStorage.setItem("hours", angular.toJson(currentEnter));
                    localStorage.setItem('count', parseInt(count) + 1);
                    //localStorage.setItem(localStorage.length + 1, JSON.stringify({ date: new Date(), time: entertime, status: 'Exit',sumhour:$scope.sumh }));
                    $scope.isEnter = false;
                    $scope.Exit = false;
                    $scope.Enter = false;
                    $scope.show = true;
                }
            }
//$scope.show = !$scope.show;
        };

        

    }
})();
