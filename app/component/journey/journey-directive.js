'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('journey', function(){
  return {
    restrict: 'E',
    template: require('./journey.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
