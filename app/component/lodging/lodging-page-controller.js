

'use strict';

const angular = require('angular');
angular.module('turkey').controller('LodgingController', [LodgingController]);

function LodgingController(){



  this.showModalImage = function(imageUrl){
    console.log('diplayImage', imageUrl);
    // this.displayImage = imageUrl || 'http://blog.folioacademy.com/wp-content/uploads/2014/02/TrollSketch01-300x256.jpg';
    this.displayModalImage = true;
  };

  this.hideModalImage = function(){
    this.displayModalImage = false;
  };


}
