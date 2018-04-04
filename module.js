(function() {
  angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider) {
      $routeProvider
        .when("/survey", {
          controller: "RoutingController as routing",
          template:"<survey></survey>"
        })
        .when("/DoggieSwipe", {
          templateUrl: "DoggieSwipe.html"
        })
        .otherwise({ redirectTo: "/home" });
    });
  })();