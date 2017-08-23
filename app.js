(function () {
   'use strict';
   var app = angular.module('iZotova',['ngAnimate', 'ui.router'])
      .run (['$rootScope', function($rootScope){
         $rootScope._ = window._;
      }])
      .constant('_', window._)
      .run (['$rootScope', '$state', function($rootScope, $state){
         $rootScope.$state = $state;
      }])
}());
