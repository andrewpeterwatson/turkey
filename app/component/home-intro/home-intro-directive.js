'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('intro', function(){
  return {
    restrict: 'E',
    template: require('./home-intro.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
