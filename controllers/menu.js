(function (module) {
   "use strict";

   module.controller('menu',
      [ '$scope', '$state', '$timeout', 'CONSTANTS', menuCtrl ]);

   function menuCtrl($scope, $state, $timeout, CONSTANTS) {

      $scope.cvRef = CONSTANTS.cvRef;

      $('#menu-phantom').html($('#menu').html());

      stickyRelocate();

      $(window).scroll(function () {
         stickyRelocate();
      });

      function stickyRelocate() {
         var window_top = $(window).scrollTop();
         var div_top = $('#content-anchor').offset().top;
         var profileTitle = $('#profileTitle'),
            menu = $('#menu'),
            menuPhantom = $('#menu-phantom');
         if (window_top > div_top) {
            menu.addClass('navbar-fixed-top');
            menuPhantom.show();
         } else {
            menu.removeClass('navbar-fixed-top');
            menuPhantom.hide();
         }
      }
   }
}(angular.module("iZotova")));