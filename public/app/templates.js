angular.module('chat').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/home/templates/home.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<section id=\"home\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t<div class=\"container full\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t<div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t<div class=\"col-sm-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"form-group\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"selectMe()\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<span>Me</span>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</button>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"selectYou()\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<span>You</span>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</button>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"panel\" style=\"margin: 100px auto;\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"well\" style=\"min-height: 150px; max-height: 400px; overflow:auto;\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p autoscroll ng-repeat=\"chat in chat.messages track by $index\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span ng-bind=\"chat.message\"></span>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-if=\"!chat.messages.length\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-muted\">Why don't you say hello ?</span>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<form class=\"form\" ng-submit=\"sendMessage(chat)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Message\" ng-model=\"chat.message\" autofocus />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-send\"></span>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</section>"
  );


  $templateCache.put('app/shared/templates/footer.html',
    "\n" +
    "\n" +
    "\t<footer id=\"footer\">\n" +
    "\t\t<section class=\"footer-wrapper\">\n" +
    "\t\t  \t<div class=\"container full\">\n" +
    "\t\t    \t<div class=\"row\">\n" +
    "\t\t      \t\t<div class=\"col-sm-12\">\n" +
    "\t\t      \t\t\n" +
    "\t\t      \t\t</div>\n" +
    "\t\t    \t</div>\n" +
    "\t\t  \t</div>\n" +
    "\t\t</section>\n" +
    "\t</footer>"
  );


  $templateCache.put('app/shared/templates/header.html',
    "\n" +
    "\n" +
    "\n" +
    "\t<header id=\"header\">\n" +
    "\t  \t<div class=\"container full\">\n" +
    "\t    \t<div class=\"row\">\n" +
    "\t    \t\t<div class=\"col-sm-12 center-sm\">\n" +
    "\t    \t\t\n" +
    "\t    \t\t</div>\n" +
    "\t    \t</div>\n" +
    "\t  \t</div>\n" +
    "\t</header>"
  );

}]);
