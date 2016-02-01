'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movies = [
      {
        title: 'A New Hope',
        url: 'https://www.youtube.com/watch?v=g6PDcBhODqo'
      },
      {
        title: 'The Dark Knight Rises',
        url: 'https://www.youtube.com/watch?v=gCEo7SCvYH4'
      },
      {
        title: 'Inside Out',
        url: 'https://www.youtube.com/watch?v=oauGmJ52XmM'
      }
    ];
  });
