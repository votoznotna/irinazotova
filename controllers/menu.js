(function (module) {
   "use strict";

   module.controller('menu',
      [ '$scope', '$state', '$timeout', 'CONSTANTS', menuCtrl ]);

   function menuCtrl($scope, $state, $timeout, CONSTANTS) {
      $scope.cvRef = CONSTANTS.cvRef;

      $(window).scroll(function () {
         var profileTitle = $('#profileTitle'),
            menu = $('#menu'),
            windowScrollTop = $(window).scrollTop(),
            profileTitleHeight = profileTitle.height();
         if (windowScrollTop > profileTitleHeight) {
            menu.addClass('navbar-fixed-top');
         }
         if (windowScrollTop <= profileTitleHeight) {
            menu.removeClass('navbar-fixed-top');
         }
      });

   }
}(angular.module("iZotova")));