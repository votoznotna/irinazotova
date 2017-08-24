(function (module) {
   "use strict";

   module.controller('cv',
      [ '$scope', '$window', '$timeout', '$state', '$stateParams', 'CONSTANTS', 'run', cvCtrl ]);

   function cvCtrl($scope, $window, $timeout, $state, $stateParams, CONSTANTS, run) {
      $window.location.href = '/';
   }

}(angular.module("iZotova")));