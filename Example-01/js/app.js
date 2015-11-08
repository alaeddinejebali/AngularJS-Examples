/**
 * Created by ala on 11/8/15.
 */
var app = angular.module('Example_01_App', []);
app.controller('ConfigController', function($scope) {
    $scope.application = {
        title: 'AngularJS- Example 01',
        description: 'In this tutorial we will learn:',
        summary: [
            'Understand directives',
            'Understand Controllers',
            'Create a compete application'
        ]
    };
});