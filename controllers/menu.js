(function (module) {
   "use strict";

   module.controller('menu',
      [ '$scope', '$state', '$timeout', 'CONSTANTS', menuCtrl ]);

   function menuCtrl($scope, $state, $timeout, CONSTANTS) {
      $scope.cvRef = CONSTANTS.cvRef;
      $('#menu-phantom').html($('#menu').html());
      $(window).scroll(function () {
         var window_top = $(window).scrollTop();
         var div_top = $('#content-anchor').offset().top;
         var profileTitle = $('#profileTitle'),
            menu = $('#menu'),
            menuPhantom = $('#menu-phantom');
            //menuPhantom.html(menu.html());
         if (window_top > div_top) {
            menu.addClass('navbar-fixed-top');
            //menu.removeClass('zindex0').addClass('zindex1');
            menuPhantom.show();
            //menuPhantom.removeClass('zindex1').addClass('zindex0');
         } else {
            menu.removeClass('navbar-fixed-top');
            //menu.removeClass('zindex0').addClass('zindex1');
            menuPhantom.hide();
            //menuPhantom.removeClass('zindex1').addClass('zindex0');
         }
      });

   }
}(angular.module("iZotova")));