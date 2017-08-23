(function (module) {
   "use strict";

   module.controller('menu',
      [ '$scope', 'CONSTANTS', menuCtrl ]);

   function menuCtrl($scope, CONSTANTS) {
      $scope.cvRef = CONSTANTS.cvRef;
   }
}(angular.module("iZotova")));