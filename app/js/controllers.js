'use strict';

/* Controllers */

var phonecatControllers = angular.module('myApp.Controllers', ['myApp.Services']);

phonecatControllers.controller('View1Ctrl', ['$scope','tianqi',function($scope,tianqi) {
  tianqi.get().then(function(data){
    $scope.result = data;
  });
}]);


phonecatControllers.controller('View2Ctrl', [function() {

}]);

phonecatControllers.controller('flickrCtrl', ['$scope','$sce',"flickr",function($scope,$sce,flickr) {
  flickr.get().then(function(data){
    $scope.result = data;
    console.log(data);
  })
}]);


