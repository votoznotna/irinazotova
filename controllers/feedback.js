(function (module) {
   "use strict";

   module.controller('feedback',
      [ '$scope', '$timeout', 'CONSTANTS', 'run', feedbackCtrl ]);

   function feedbackCtrl($scope, $timeout, CONSTANTS, run) {
      $scope.excerpts = [
         'She obviously really cares about the course and the material. When you ask her a question about the material, she always gives an answer that is clear and concise.',
         'I understood everything she said and she knew to just work on the harder material which was were all the troubles in the class were arising.',
         'I like that her examples were always way more difficult than the questions that were on the tests. It helped build a better understanding of what really is going on in the class.',
         'She\'s an awesome TA! Probably one of the reasons why I\'m doing well in this course and actually learning instead of memorizing.',
         'She simplifies large problems into logical steps that foster learning for students.',
         'Goes through difficult and important topics clearly, tries to explain them differently than in lecture so that we have more ways to understand the material.',
         // 'She was always willing to help and answer questions. She also guided us through difficult problems without outright giving the answer. She really made this tedious subject material more bearable to study.',
         // 'TA made the section clear and organized. She always well prepared for assisting reviewing the main points of each week lecture. Also, she provided varied examples to supplement the lecture.',
         // 'TA\'s intelligence, professional nature, helpfulness, and openness to help.'
      ]
   }

}(angular.module("iZotova")));