'use strict';

/**
 * @ngdoc function
 * @name angularAuthJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularAuthJwtApp
 */
angular.module('angularAuthJwtApp')
    .controller('RegisterCtrl', function ($scope, $http) {
        $scope.submit = function () {
            var url = '/';
            var user = {};
            $http.post(url, user)
                .then(function (res) {
                    console.log('Success ', res);
                }, function (err) {
                    console.log('Error ', err);
                });
            //                .success(function (res) {
            //                    console.log('Success ', res);
            //                })
            //                .error(function (err) {
            //                    console.log('Error ', err);
            //                })
            console.log('Testing');
        }
    });
