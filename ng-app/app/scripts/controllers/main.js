'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
