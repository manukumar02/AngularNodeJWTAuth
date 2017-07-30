'use strict';

/**
 * @ngdoc function
 * @name angularAuthJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularAuthJwtApp
 */
angular.module('angularAuthJwtApp')
    .controller('RegisterCtrl', function ($scope) {
        $scope.submit = function () {
            console.log('Testing');
        }
    });
