'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('food', function(){
  return {
    restrict: 'E',
    template: require('./food.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
