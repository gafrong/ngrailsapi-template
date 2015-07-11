'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('ngRailsTemplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
