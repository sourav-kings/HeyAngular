'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.name = 'Sample Name';
    $scope.name1 = 'Xavier Alexander';
    $scope.name2 = 'Aryan Raj';
    $scope.name3 = 'Jill Valentine';

    $scope.hi = function (val) { alert('Hello '+ val); };
    $scope.bye = function (val) { alert('See you again ' + val); };
});

