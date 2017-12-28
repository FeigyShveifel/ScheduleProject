(function () {
    'use strict';

    angular
        .module('SlApp.schedule')
        .controller('schedulectrl', schedulectrl);

    schedulectrl.$inject = ['$scope'];

    function schedulectrl($scope) {
        $scope.month = true;
        /* jshint validthis:true */
        var vmschedule = this;
        vmschedule.title = 'schedule';
         $scope.Arr = [];
         $scope.txt="";
    $scope.TableLoadMonth = function () {
        $scope.show = true;
        $scope.sum = 0;
        $scope.Arr = [];
        $scope.hours = [];
        $scope.hours = angular.fromJson(localStorage.getItem("hours"));
        var count = localStorage.getItem('count') | 0;
            for (var i = 0; i < count; i++) {
                var p = $scope.hours[i];
                    var m = new Date(p.date).getMonth() + 1;
                    if (m.toString() == $scope.txt || $scope.txt == "")
                        $scope.Arr.push({ date: p.date, time: p.time, status: p.status, sumhour: p.sumhour });
                
            }
            $scope.month = false;
        }

    }
})();
