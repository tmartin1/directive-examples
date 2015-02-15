'use strict';

angular.module('exampleApp')
.controller('AnimationCtrl', function($scope) {
  $scope.name = 'Flash Gordon';
});

app.directive('animator',function(){
  return {
    replace:false,
    restrict: 'E',
    template: '<h3>Your name is: {{name}}</h3>',
    link: function() {
      //
    }
  }
});
