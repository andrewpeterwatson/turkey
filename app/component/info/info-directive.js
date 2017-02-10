'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('info', function(){
  return {
    restrict: 'E',
    template: require('./info.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
