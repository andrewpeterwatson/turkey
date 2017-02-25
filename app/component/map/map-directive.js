'use strict';

const angular = require('angular');
angular.module('turkey')
.directive('map', function(){
  return {
    restrict: 'E',
    template: require('./map.html'),
    controller: ['$location', HomeController],
    controllerAs: 'homeCtrl',
    bindToController: true,
    scope: {}
  };

    function HomeController($location) {

      function initMap() {
       var uluru = {lat: -25.363, lng: 131.044};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: uluru
       });
       var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });
     }

    }
  }
)
