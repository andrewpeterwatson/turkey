'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingPage', function(){
  return {
    restrict: 'E',
    template: require('./lodging-page.html'),
    controller: ['$location', LodgingController],
    controllerAs: 'lodgeCtrl',
    bindToController: true,
    scope: {}
  };

    function LodgingController($location) {

      this.displayModalImage = false;
      this.displayLodging = 'none'

      this.showModalImage = function(lodging){
        this.displayLodging = lodging;
        this.displayModalImage = true;
      };

      this.hideModalImage = function(){
        this.displayModalImage = false;
      };

    }
  }
)
