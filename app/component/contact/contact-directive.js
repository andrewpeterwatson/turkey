'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('contact', function(){
  return {
    restrict: 'E',
    template: require('./contact.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {
    }
  }
)
