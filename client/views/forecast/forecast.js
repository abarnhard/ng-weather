/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current 10 Forecast:';
    $scope.zip = null;

    $scope.getForecast = function(){
      wu.getForecast10Day($scope.zip).then(function(res){
        $scope.days = res.data.forecast.simpleforecast.forecastday;
      });
    };

  }]);

})();
