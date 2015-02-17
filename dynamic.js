'use strict';

angular.module('dynamicApp', [])

.controller('DynamicCtrl', function($scope) {
  $scope.user = { name:'Flash Gordon', age:'26', sex:'male' };
  $scope.queries = [
    { title: 'name', question: 'What is your name? ', bind: 'name', type: 'text' },
    { title: 'age', question: 'What is your age? ', bind: 'age', type: 'text' }
  ];
})

.directive('questions', function() {
  return {
    restrict: 'E',
    scope: {
      queries:'=',
      user: '='
    },
    controller: function($scope) {
      console.log($scope);
      // this.template = templates[$scope.query.type];
    },
    template: ' \
      <my-tabs> \
        <my-pane ng-repeat="query in queries" title="{{query.title}}"> \
          <h4>{{query.question}}</h4> \
          <question query="query" user="user" ng-model="user[query.bind]"></question> \
        </my-pane> \
      </my-tabs>'
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
    templateUrl: 'dynamic-template.html'
  };
})

.directive('myTabs', function() {
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
    templateUrl: 'dynamic-tabs.html'
  };
})

.directive('myPane', function() {
  return {
    require: '^myTabs',
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



