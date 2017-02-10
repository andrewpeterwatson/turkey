'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('map', function(){
  return {
    restrict: 'E',
    template: require('./map.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
