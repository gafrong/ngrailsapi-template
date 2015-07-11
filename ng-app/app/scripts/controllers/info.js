'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('ngRailsTemplateApp')
  .controller('InfoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
