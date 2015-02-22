'use strict';

/**
 * @ngdoc function
 * @name dreamteamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dreamteamApp
 */
angular.module('dreamteamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
