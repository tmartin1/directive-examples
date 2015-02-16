angular.module('scopingApp', [])

.controller('ScopingCtrl', function($scope) {
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
    }, // Creates an independent scope for this directive, idenpendent of the parent scope.
    replace: false,
    restrict: 'AE',
    template: '\
      <h3>{{query.question}}</h3> \
      <input type="text" ng-model="query.model"/> \
      <h4><i>(From child scope)</i> {{query.text}}{{query.model}}</h4><br>'
  }
});
