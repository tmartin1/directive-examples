angular.module('isolatedScopeApp', [])

.controller('IsolatedScopeCtrl', function($scope) {
  $scope.user = { name:'Flash Gordon', age:'26' };
  $scope.query = [
    { question: 'What is your name?', text:'Your name is: ' , model:'Flash Gordon' },
    { question: 'How old are you?', text:'Your age is: ' , model:'26' }
  ];
})

.directive('question',function(){
  return {
    scope: {
      binding:'=',
      query: '='
    },
    restrict: 'E',
    template: '\
      <h3>{{query.question}}</h3> \
      <input type="text" ng-model="query.model"/> \
      <h4><i>(From child scope)</i> {{query.text}}{{query.model}}</h4><br>'
  }
});
