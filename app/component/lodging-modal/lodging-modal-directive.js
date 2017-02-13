'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('lodgingModal', function(){
  return {
    restrict: 'E',
    template: require('./lodging-modal.html'),
    scope: {
      lodging: '@',
      showModal: '&',
      closeModal: '&',
      showImage: '&',
    }
  };

  }
)
