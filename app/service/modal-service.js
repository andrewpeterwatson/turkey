
'use strict';

const angular = require('angular');

angular.module('turkey')
.factory('lodgeSelectionService', [ '$log', LodgeSelectionService]);

function LodgeSelectionService($log) {
  let service = {};

  service.lodgeSelection = {
    lodging: 'not yet'
  };

  service.setLodging = function(lodging) {
    service.lodgeSelection.lodging = lodging;
    console.log('service hit', service.lodgeSelection.lodging);
  }

    return service;
}
