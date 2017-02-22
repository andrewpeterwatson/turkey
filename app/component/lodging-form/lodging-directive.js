'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingForm', function(){
  return {
    restrict: 'E',
    template: require('./lodging.html'),
    controller: ['$location','lodgeSelectionService', LodgingFormController],
    controllerAs: 'lodgeFormCtrl',
    bindToController: true,
    scope: {
     imageModal: '=',
     lodging: '=',
     showModal: '&',
     showModalImage: '&',
   }
  };

    function LodgingFormController($location, lodgeSelectionService) {

      this.chooseLodging = function(lodging) {
        lodgeSelectionService.lodgeSelection.lodging = lodging
      }
    }
  }
)
