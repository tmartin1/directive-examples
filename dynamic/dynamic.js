'use strict';

angular.module('dynamicApp', [])

.controller('DynamicCtrl', function($scope) {
  $scope.user = { name:'Flash Gordon', age:'26', sex:'male' };
  $scope.queries = [
    { title: 'name', question: 'What is your name? ', bind: 'name', type: 'text' },
    { title: 'age', question: 'What is your age? ', bind: 'age', type: 'select', options: (function(){ var list = []; for (var i = 18; i <= 100; i++) { list.push(i); } return list; })() }
  ];
})

.directive('questions', function() {
  return {
    restrict: 'E',
    scope: {
      queries:'=',
      user: '='
    },
    template: ' \
      <menu> \
        <my-pane ng-repeat="query in queries" title="{{query.title}}"> \
          <h4>{{query.question}}</h4> \
          <question query="query" user="user" ng-model="user[query.bind]"></question> \
        </my-pane> \
      </menu>'
  };
})

.directive('question', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      query: '=',
      user: '='
    },
    templateUrl: './dynamicTemplate.html'
  };
})

.directive('menu', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope) {
      var panes = $scope.panes = [];
      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };
      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    },
    templateUrl: './dynamic-tabs.html'
  };
})

.directive('myPane', function() {
  return {
    require: '^menu',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template: '<div class="tab-pane" ng-show="selected" ng-transclude></div>'
  };
});




