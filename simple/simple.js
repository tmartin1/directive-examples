'use strict';

angular.module('simpleApp', [])

.controller('SimpleCtrl', function($scope) {
  $scope.name;
})

.directive('copycat', function() {
  return {
    replace: true,
    restrict: 'E',
    template: '<h3>Your name is: {{name}}</h3>'
  }
});
