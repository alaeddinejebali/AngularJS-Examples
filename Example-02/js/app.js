/**
 * Created by ala on 11/8/15.
 */
var app = angular.module('Example_02_App', []);
app.controller('ConfigController', function($scope) {
    $scope.application = {
        title: 'AngularJS- Example 02',
        description: 'AngularJS has many advantages:',
        advantages: [
            'AngularJS Handles Dependencies',
            'AngularJS Allows Developers to Express UI Declaratively and Reduce Side Effects',
            'AngularJS Enables Massively Parallel Development',
            'AngularJS Enables a Design - Development Workflow',
            'AngularJS Gives Developers Controls',
            'AngularJS Helps Developers Manage State',
            'AngularJS Supports Single Page Applications'
        ]
    };
});