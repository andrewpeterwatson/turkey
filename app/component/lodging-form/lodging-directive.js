'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingForm', function(){
  return {
    restrict: 'E',
    template: require('./lodging.html'),
    controller: ['$location', LodgingFormController],
    controllerAs: 'lodgeFormCtrl',
    bindToController: true,
    scope: {
     imageModal: '=',
     lodging: '=',
     showModal: '&',
     showModalImage: '&',
   }
  };

    function LodgingFormController($location) {

    }
  }
)
