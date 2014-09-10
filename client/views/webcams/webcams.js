/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){

    $scope.title = 'Perve on all these hot street views:';
    $scope.zip = null;
    $scope.cams = [];

    $scope.checkWeather = function(){
      wu.getWebcams($scope.zip).then(function(res){
        $scope.cams = [];
        res.data.webcams.forEach(function(cam){
          $scope.cams.push(cam.CURRENTIMAGEURL);
        });
      });

    };

  }]);

})();
