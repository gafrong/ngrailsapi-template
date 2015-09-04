'use strict';

/**
* @ngdoc function
* @name ngRailsTemplateApp.controller:UserSessionsCtrl
* @description
* # UserSessionsCtrl
* Controller of the ngRailsTemplateApp
*/
angular.module('App')
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });

    // $scope.close = function(){
    //   $modalInstance.close();
    // }
  }]);