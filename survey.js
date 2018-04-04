(function () {

  let survey = {
    controller: "RoutingController",
    templateUrl: "question.html"
  };

  angular
    .module("app")
    .component("survey", survey);
})();