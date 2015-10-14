'use strict';

/* Controllers */

var phonecatControllers = angular.module('myApp.Controllers', ['myApp.Services']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

phonecatControllers.controller('View1Ctrl', ['$scope','tianqi',function($scope,tianqi) {
  tianqi.get().then(function(data){
    $scope.result = data;
  });
}]);

phonecatControllers.controller('View2Ctrl', [function() {

}]);
