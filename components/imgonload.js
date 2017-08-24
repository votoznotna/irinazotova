(function (module) {
   "use strict";

   module.directive('imageonload', function() {
      return {
         restrict: 'A',
         link: function(scope, element, attrs) {

            var imgLoadingIcon = attrs["imageonload"];
            var loader = null;

            if(imgLoadingIcon) {
               loader = angular.element("<img class='center-block' src='" + imgLoadingIcon + "' style='visibility:visible; margin: 50px auto; width: 100px' alt='Processing...'>");
               element.after(loader);
            }

            element.bind('load', function() {
               loader.remove();
               element.css('display', 'block');
            });
         }
      };
   });

}(angular.module('iZotova')));