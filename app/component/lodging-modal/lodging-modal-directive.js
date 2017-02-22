'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingModal', function(){
  return {
    restrict: 'E',
    template: require('./lodging-modal.html'),
    controller: ['$location','lodgeSelectionService', LodgeModalController],
    controllerAs: 'lodgeMCtrl',
    bindToController: true,
    scope: {
      lodging: '@',
      hotel: '@',
      showModal: '&',
      closeModal: '&',
      showImage: '&',
    },
  };


  function LodgeModalController($location, lodgeSelectionService){

    this.currentLodging = 'nothing',
    this.hotel = false;

    this.lodgingSelection = function() {

      this.currentLodging = lodgeSelectionService.lodgeSelection.lodging;

      this.currentLodging === 'hotel' ? this.hotel = true : this.hotel = false;

      return
    }

    this.testBtn = function() {
      console.log('this is lodging', lodgeSelectionService.lodgeSelection.lodging);
    }




  }

  }
)
