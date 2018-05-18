"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/survey", {
          template: "<survey></survey>"
        })
        .when("/dog", {
          template: "<dog></dog>"
        })
        .otherwise({ redirectTo: "/home" });
    });
}