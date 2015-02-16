angular.module('scopeEqualsApp', [])

.controller('ScopeEqualsCtrl', function($scope) {
  $scope.user = { name:'Default Name', age:'Default Age' };
  $scope.query = [
    { question: 'What is your name?', text:'Your name is: ' , model:'Default Name' },
    { question: 'How old are you?', text:'Your age is: ' , model:'Default Age' }
  ];
})

.directive('question',function(){
  return {
    scope: {
      binding:'=',
      query: '='
    },
    replace:false,
    restrict: 'AE',
    template: '\
      <h3>{{query.question}}</h3> \
      <input type="text" ng-model="binding"/> \
      <h4><i>(From child scope)</i> {{query.text}}{{binding}}</h4><br>'
  }
});
