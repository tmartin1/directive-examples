'use strict';

var app = angular.module('exampleApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $stateProvider
  .state('simple', {
    url: '/simple',
    templateUrl: 'simple/simple.html',
    controller: 'SimpleCtrl'
  })
  .state('animation', {
    url: '/animation',
    templateUrl: 'animation/animation.html',
    controller: 'AnimationCtrl'
  });
});
