/**
 * Created by ala on 11/8/15.
 */
var app = angular.module('Example_04_01_App', []);
app.controller('ConfigController', function($scope) {
    $scope.application = {
        title: 'AngularJS- Example 04.01',
        description: 'AngularJS has many advantages:',
        advantages: [
            {id: 1, label: 'AngularJS Handles Dependencies'},
            {id: 2, label: 'AngularJS Allows Developers to Express UI Declaratively and Reduce Side Effects'},
            {id: 3, label: 'AngularJS Enables Massively Parallel Development'},
            {id: 4, label: 'AngularJS Enables a Design - Development Workflow'},
            {id: 5, label: 'AngularJS Gives Developers Controls'},
            {id: 6, label: 'AngularJS Helps Developers Manage State'},
            {id: 7, label: 'AngularJS Supports Single Page Applications'}
        ]
    };
});