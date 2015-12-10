'use strict';

/**
 * @ngdoc function
 * @name uiCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiCodeApp
 */
angular.module('uiCodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
