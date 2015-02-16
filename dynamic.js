'use strict';

angular.module('dynamicApp', [])

.controller('DynamicCtrl', function($scope) {
  $scope.items = [
    { question: 'What is your name?', text: 'Your name is: ', bind: 'name' },
    { question: 'How do you feel?', text: 'You feel: ', bind: 'feel' }
  ];
})

// Child scope variables change, but they are not bound to parent scope variables.
// As such, they are not properly saved in the parent scope.
// ****************************************************************************
.directive('repeater', function($rootScope) {
  return {
    scope: false, // true = Use a child scope that inherits from parent.
    replace: false,
    restrict: 'E',
    template: ' \
      <h3>{{item.question}}</h3> \
      <input type="text" ng-model="item.model" ng-bind="{{item.bind}}" /> \
      <h4>{{item.text}}{{item.model}}</h4><br>'
  };
});

// Putting the ng-repeat inside the template creates a child scope for each repeat.
// But this still does not solve the problem of saving variables to the parent scope. 
// ****************************************************************************
// .directive('repeater', function($rootScope) {
//   return {
//     scope: false, // true = Use a child scope that inherits from parent.
//     replace: false,
//     restrict: 'E',
//     template: ' \
//       <div ng-repeat="item in items"> \
//         <h3>{{item.question}}</h3> \
//         <input type="text" ng-model="item.model" ng-bind="{{item.bind}}" /> \
//         <h4>{{item.text}}{{item.model}}</h4><br> \
//       </div> \
//       ',
//     compile: function(tElem, attrs) {
//       //do optional DOM transformation here
//       return function(scope, elem, attrs) {
//         attrs.$set('ngModel', scope.$eval(attrs.repeater));
//         attrs.$set('repeater', null);
//         console.log(scope);
//       };
//     }
//   };
// });
