'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('schedule', function(){
  return {
    restrict: 'E',
    template: require('./schedule.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
