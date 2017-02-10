'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('acc', function(){
  return {
    restrict: 'E',
    template: require('./acc.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
