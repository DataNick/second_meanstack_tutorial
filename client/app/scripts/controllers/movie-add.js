'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
 //Movie in the parameter is Restangular movie object
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
    $scope.movie = {};
    $scope.saveMovie = function () {
      Movie.post($scope.movie).then(function () {
        $location.path('/movies');
      });
    };
  });
