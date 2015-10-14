'use strict';

/* Services */

var phonecatServices = angular.module('myApp.Services', []);

phonecatServices.factory('tianqi', ['$http','$q',
  function($http,$q){
    var tianqi = {};

    tianqi.get = function(){
      var defered = $q.defer();
      var url = "http://apis.baidu.com/3023/weather/weather";
      var params = {"id":"101010300"};
      var headers = {"apikey":"9e14c533beebf64dce64df793470b4dc"};
      $http({
        method:"get",
        url: url,
        params: params,
      }).success(function(data){
        defered.resolve(data);
        console.log(data);
      }).error(function(){
        defered.reject("ERR");
      });
      return defered.promise;
    };

    return tianqi;
  }]);

phonecatServices.factory("flickr",["$q","$http",
  function($q,$http){
    var flickr = {};
    flickr.get = function(key){
      var defered = $q.defer();
      $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=car&tagmode=any&format=json&jsoncallback=JSON_CALLBACK")
          .success(function(data){
            defered.resolve(data);
          })
          .error(function(){
            defered.reject("error");
          });
      return defered.promise;
    }
    return flickr;
}]);