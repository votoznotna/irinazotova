(function (module) {
   "use strict";

   module.controller('menu',
      [ '$scope', '$state', '$timeout', 'CONSTANTS', menuCtrl ]);

   function menuCtrl($scope, $state, $timeout, CONSTANTS) {
      $scope.cvRef = CONSTANTS.cvRef;
   }
}(angular.module("iZotova")));