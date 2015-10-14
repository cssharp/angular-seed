'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.Animations',
  'myApp.Controllers',
  'myApp.Filters'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.
          when("/view1",{
            templateUrl: 'partials/view1.html',
            controller: 'View1Ctrl'}).
          when("/view2",{
              templateUrl: 'partials/view2.html',
              controller: 'View2Ctrl'}).
          when("/flickr",{
              templateUrl: 'partials/flickr.html',
              controller: 'flickrCtrl'})
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
