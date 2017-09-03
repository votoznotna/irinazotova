(function (module) {
   "use strict";

   module.config(['$locationProvider', '$stateProvider','$urlRouterProvider',
      function ($locationProvider, $stateProvider, $urlRouterProvider) {

         $locationProvider.hashPrefix('');
         $urlRouterProvider.otherwise('/');

         $stateProvider
            .state("home", {
               url: "/",
               templateUrl: "views/pages/home.html",
               controller: "home"
            })
            .state("research", {
               url: "/research",
               templateUrl: "views/pages/research.html",
               controller: "research"
            })
            .state("teaching", {
               url: "/teaching",
               templateUrl: "views/pages/teaching.html",
               controller: "teaching"
            })
            .state("classMaterials", {
               url: "/class-materials",
               templateUrl: "views/pages/class-materials.html",
               controller: "classMaterials"
            })
            .state("references", {
               url: "/references",
               templateUrl: "views/pages/references.html",
               controller: "references"
            })
            .state("feedback", {
               url: "/feedback",
               templateUrl: "views/pages/feedback.html",
               controller: "feedback"
            })
            .state("cv", {
               url: "/cv",
               templateUrl: "views/pages/cv.html",
               controller: "cv"
            })

      }]);

}(angular.module("iZotova")));

