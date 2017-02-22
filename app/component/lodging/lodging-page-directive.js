'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingPage', function(){
  return {
    restrict: 'E',
    template: require('./lodging-page.html'),
    controller: ['$location','lodgeSelectionService', LodgingController],
    controllerAs: 'lodgeCtrl',
    bindToController: true,
    scope: {}
  };

    function LodgingController($location, lodgeSelectionService) {

      this.displayModalImage = false;
      this.displayLodging = 'none'
      this.currentLodging = null;


      this.showModalImage = function(lodging){
        this.displayLodging = lodging;
        this.displayModalImage = true;
        console.log('BEFORE lodging is ', this.currentLodging);
        lodgeSelectionService.setLodging(lodging)
        this.currentLodging = lodgeSelectionService.lodgeSelection.lodging
        console.log('AFTER lodging is ', this.currentLodging);
      };

      this.hideModalImage = function(){
        this.displayModalImage = false;
      };

    }
  }
)
