'use strict';

angular.module('animationApp', [])

.controller('AnimationCtrl', function($scope) {
  $scope.slideText = [
    'This is the first slide.<br>Click "next" to go to the next slide.',
    'This is the second slide.<br>Click "previous" to go to the previous slide.'
  ];
})

.directive('animator', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: './animationTemplate.html',
    link: function() {
      //
    }
  }
});
