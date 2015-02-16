'use strict';

angular.module('dynamicApp', [])

.controller('DynamicCtrl', function($scope) {
  $scope.user = {};
  $scope.items = [
    { question: 'What is your name?', text: 'Your name is: ', bindTo: 'user.name' },
    { question: 'How do you feel?', text: 'You feel: ', bindTo: 'user.feel' }
  ];
})

// Child scope variables change, but they are not bound to parent scope variables.
// As such, they are not properly saved in the parent scope.
// ****************************************************************************
// .directive('repeater', function($rootScope) {
//   return {
//     scope: false, // true = Use a child scope that inherits from parent.
//     replace: false,
//     restrict: 'E',
//     template: ' \
//       <h3>{{item.question}}</h3> \
//       <input type="text" ng-model="item.model" ng-bind="{{item.bindTo}}" /> \
//       <h4>{{item.text}}{{item.model}}</h4><br>'
//   };
// });

// Putting the ng-repeat inside the template creates a child scope for each repeat.
// But this still does not solve the problem of saving variables to the parent scope. 
// ****************************************************************************
.directive('repeater', function($rootScope) {
  return {
    scope: {
      binding: '=',
      item: '='
    },
    bindToController: true,
    replace: false,
    restrict: 'E',
    template: ' \
        <h3>{{item.question}}</h3> \
        <input type="text" ng-model="item.bindTo" /> \
        <h4>{{item.text}}{{item.model}}</h4><br> \
      ',
    compile: function(tElem, attrs) {
      //do optional DOM transformation here
      // console.log(tElem);
      // console.log(attrs);
      // console.log($('#'+scope.binding));
      return function(scope, elem, attrs) {
        console.log(scope);
        console.log(elem[0].children[1]);
        // attrs.$set('ng-model', scope.binding);
        attrs.$set('repeater', null);
        // console.log('Scope in compile:')
        // console.log(scope.binding);
        // console.log(elem[0]);
      };
    }
  };
});
