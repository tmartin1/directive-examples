'use strict';

app.controller('SimpleCtrl', function($scope) {
  //
});

app.directive('repeater',function(){
  return {
    replace:false,
    restrict: 'E',
    template: '<h3>Your name is {{name}}</h3>',
    link: function() {
      //
    }
  }
});
