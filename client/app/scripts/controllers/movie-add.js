'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
 //Movie in the parameter is Restangular movie object
 //$scope.movie changes as you type into the input fields b/c of two-way binding concept
 //saveMove - call restangular movie object, post that object to the url, then promises feature that calls this callback function to change the url to go to /movies
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
    $scope.movie = {};
    $scope.saveMovie = function () {
      Movie.post($scope.movie).then(function () {
        $location.path('/movies');
      });
    };
  });
