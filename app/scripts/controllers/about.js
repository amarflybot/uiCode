'use strict';

/**
 * @ngdoc function
 * @name uiCodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiCodeApp
 */
angular.module('uiCodeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
