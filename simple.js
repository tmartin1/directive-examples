'use strict';

app.controller('SimpleCtrl', function($scope) {
  $scope.name = 'Flash Gordon';
});

app.directive('repeater',function(){
  return {
    replace:false,
    restrict: 'E',
    template: '<h3>Your name is: {{name}}</h3>'
  }
});
