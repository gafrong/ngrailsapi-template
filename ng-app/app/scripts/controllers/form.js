'use strict';

/**
 * @ngdoc function
 * @name ngRailsTemplateApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the ngRailsTemplateApp
 */
angular.module('ngRailsTemplateApp')
  .controller('FormCtrl', function ($scope) {
    $scope.areaCode = [
      '3000',
      '3001',
      '3002'
    ];
  });
