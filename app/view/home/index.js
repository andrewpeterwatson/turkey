'use strict';

require('./home.scss');

const angular = require('angular');
angular.module('turkey')
.controller('HomeController', ['$log', '$location', HomeController]);

function HomeController($log, $location){
}
