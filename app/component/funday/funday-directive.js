'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('funday', function(){
  return {
    restrict: 'E',
    template: require('./funday.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
