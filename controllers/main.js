(function (module) {
   "use strict";

   module.controller('main',
      [ '$scope', '$location', '$route', '$timeout', 'CONSTANTS', mainCtrl ]);

   function mainCtrl($scope, $location, $route, $timeout, CONSTANTS) {
      $scope.$route = $route;
   }
}(angular.module("iZotova")));