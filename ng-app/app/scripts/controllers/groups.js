'use strict';

angular.module('App')
  .controller('GroupsCtrl', ['$scope', function ($scope) {
    $scope.groups = [
      'Group 1',
      'Group 2',
      'Group 3'
    ];
  }]);
