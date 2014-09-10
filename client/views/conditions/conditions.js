/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Coditions:';
    $scope.zip = null;

    $scope.checkWeather = function(){
      wu.getConditions($scope.zip).then(function(res){
        $scope.temp = res.data.current_observation.temp_f;
        $scope.iconUrl = res.data.current_observation.icon_url;
      });
    };

  }]);

})();
