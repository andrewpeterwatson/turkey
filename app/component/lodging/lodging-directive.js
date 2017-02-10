'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodging', function(){
  return {
    restrict: 'E',
    template: require('./lodging.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
