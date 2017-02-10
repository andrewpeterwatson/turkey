'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');


angular.module('turkey', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

require('./view/home/index.js');

require('./controller/home-controller')

require('./component/home-intro')
require('./component/info')
require('./component/lodging')
require('./component/food')
require('./component/accomodations')
require('./component/journey')
require('./component/map')
