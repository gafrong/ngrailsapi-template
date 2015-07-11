'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('ngRailsTemplateApp')
  .controller('ListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
