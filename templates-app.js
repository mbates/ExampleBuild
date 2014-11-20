angular.module('templates-app', ['game/game.add.tpl.html', 'game/game.confirm.tpl.html', 'game/game.details.tpl.html', 'game/game.edit.tpl.html', 'game/game.index.tpl.html', 'game/game.tpl.html', 'login/login.tpl.html']);

angular.module("game/game.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.add.tpl.html",
    "<nav class=\"nav-bar\">\n" +
    "    <div class=\"table\">\n" +
    "        <div class=\"label\">\n" +
    "            <a ng-click=\"$back()\" class=\"back\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1 class=\"st-title\">Add Game</h1>\n" +
    "        </div>\n" +
    "        <div class=\"label\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div x-container id=\"add\" class=\"row\" ui-view=\"add\">\n" +
    "\n" +
    "    <section class=\"content\">\n" +
    "\n" +
    "        <form name=\"addSurgeryForm\" class=\"form-vertical\">\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{ 'has-error': addGameForm.title.$invalid }\">\n" +
    "                <label>Title:</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"title\" ng-model=\"formData.title\" placeholder=\"Enter Title\" ng-required=\"true\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"formData.notes\">Notes (Optional):</label>\n" +
    "                <div class=\"controls\">\n" +
    "                    <textarea class=\"form-control\" name=\"notes\" ng-model=\"formData.notes\" placeholder=\"Enter notes...\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-submit\">\n" +
    "                <div class=\"controls\">\n" +
    "                    <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"postGame()\">Confirm Details</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("game/game.confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.confirm.tpl.html",
    "<nav class=\"nav-bar\">\n" +
    "    <div class=\"table\">\n" +
    "        <div class=\"label\">\n" +
    "            <a ng-click=\"$back()\" class=\"back\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1 class=\"st-title\">Confirm Details</h1>\n" +
    "        </div>\n" +
    "        <div class=\"label\"></div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div x-container id=\"confirm\" class=\"row\" ui-view=\"add\">\n" +
    "\n" +
    "    <section>\n" +
    "\n" +
    "        <ul class=\"table\">\n" +
    "            <li>\n" +
    "                <div class=\"info top\">\n" +
    "                    <h2>Title</h2>\n" +
    "                    {{gameData.title}}\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"info top\">\n" +
    "                    <h2>Notes</h2>\n" +
    "                    {{gameData.notes}}\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div class=\"form-submit\">\n" +
    "            <div class=\"two\">\n" +
    "                <button class=\"btn btn-lg btn-block btn-blue\" ng-click=\"$back()\">Cancel</button>\n" +
    "            </div>\n" +
    "            <div class=\"two\">\n" +
    "                <button class=\"btn btn-lg btn-block\" ng-click=\"postGame()\">Save</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </section>\n" +
    "\n" +
    "</div>");
}]);

angular.module("game/game.details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.details.tpl.html",
    "<nav class=\"nav-bar\">\n" +
    "    <div class=\"table\">\n" +
    "        <div class=\"label\">\n" +
    "            <a ng-click=\"$back()\" class=\"back\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1 class=\"st-title\">Game Details</h1>\n" +
    "        </div>\n" +
    "        <div class=\"label\">\n" +
    "            <a href=\"#game/{{gameDetails.id}}/edit\"><span class=\"glyphicon glyphicon-pencil\"></span> Edit Game</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div x-container id=\"details\" class=\"row\" ui-view=\"details\">\n" +
    "\n" +
    "    <ul class=\"table\">\n" +
    "        <li>\n" +
    "            <div class=\"info top\">\n" +
    "                <h2>Title</h2>{{gameDetails.title}}<br />\n" +
    "                <h2>Notes</h2>{{gameDetails.notes}}\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"takePhoto()\">Take Photo</button>\n" +
    "\n" +
    "    <div>\n" +
    "        <ul class=\"tray-photos clearfix\">\n" +
    "            <li ng-if=\"gameDetails.image != ''\" class=\"photo\">\n" +
    "                <img class=\"img-responsive\" src=\"{{baseString}},{{gameDetails.image}}\" />\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("game/game.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.edit.tpl.html",
    "<nav class=\"nav-bar\">\n" +
    "    <div class=\"table\">\n" +
    "        <div class=\"label\">\n" +
    "            <a ng-click=\"$back()\" class=\"back\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1 class=\"st-title\">Edit Game</h1>\n" +
    "        </div>\n" +
    "        <div class=\"label\"></div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div x-container id=\"edit\" class=\"row\" ui-view=\"edit\">\n" +
    "\n" +
    "    <section class=\"content\">\n" +
    "\n" +
    "        <form name=\"editGameForm\" class=\"form-vertical\">\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{ 'has-error': editGameForm.title.$invalid }\">\n" +
    "                <label>Title:</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"title\" ng-model=\"formData.title\" placeholder=\"Enter Title\" ng-required=\"true\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"formData.notes\">Notes (Optional):</label>\n" +
    "                <div class=\"controls\">\n" +
    "                    <textarea class=\"form-control\" name=\"notes\" ng-model=\"formData.notes\" placeholder=\"Enter notes...\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-submit\">\n" +
    "                <div class=\"controls\">\n" +
    "                    <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"postGame()\">Confirm Details</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "</div>");
}]);

angular.module("game/game.index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.index.tpl.html",
    "<nav class=\"nav-bar\">\n" +
    "    <div class=\"table\">\n" +
    "        <div class=\"label\">\n" +
    "            <a ng-click=\"$back()\" class=\"back\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1 class=\"st-title\">Games</h1>\n" +
    "        </div>\n" +
    "        <div class=\"label\">\n" +
    "            <a href=\"#game/add\"><span class=\"glyphicon glyphicon-plus\"></span> Add Game</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div x-container class=\"row\">\n" +
    "    \n" +
    "    <div ng-repeat=\"game in games\">\n" +
    "\n" +
    "        <header class=\"table-header\">\n" +
    "\n" +
    "            <h2 class=\"left\">{{game.title}}</h2>\n" +
    "\n" +
    "        </header>\n" +
    "\n" +
    "        <ul class=\"table\">\n" +
    "\n" +
    "            <li class=\"game-details\">\n" +
    "                <a ng-href=\"#game/{{game.id}}/details\">\n" +
    "                    {{game.notes}}\n" +
    "                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("game/game.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("game/game.tpl.html",
    "<div ui-view></div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<header role=\"banner\" class=\"hero\">\n" +
    "	<img src=\"assets/img/mb-logo.png\" class=\"logo\" alt=\"Example\" />\n" +
    "    <div class=\"using-casechek\">\n" +
    "        <img src=\"assets/img/gamer.png\" class=\"doctor\" />\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<form class=\"form-login\" role=\"form\">\n" +
    "	<div class=\"form-group\">\n" +
    "		<label class=\"form-login-heading\">Login</label>\n" +
    "		<input type=\"text\" class=\"form-control\" placeholder=\"Username\" data-ng-model=\"loginData.username\" required autofocus>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"password\" class=\"form-control\" placeholder=\"Password\" data-ng-model=\"loginData.password\" required>\n" +
    "	</div>\n" +
    "	<div data-ng-hide=\"message == ''\" class=\"alert alert-danger\">\n" +
    "		{{message}}\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<button class=\"btn btn-lg btn-info btn-block\" type=\"submit\" data-ng-click=\"login()\">Login</button>\n" +
    "	</div>\n" +
    "</form>");
}]);
