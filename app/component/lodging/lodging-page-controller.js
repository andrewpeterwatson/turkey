

'use strict';

const angular = require('angular');
angular.module('turkey').controller('LodgingController', [LodgingController]);

function LodgingController(){



  this.showModalImage = function(imageUrl){
    this.displayModalImage = true;
  };

  this.hideModalImage = function(){
    this.displayModalImage = false;
  };


}
