  (function() {
  
    let dog = {
        controller: "RoutingController",
        template: "{{ $ctrl.message }} "
      };
      
    angular
      .module("app")
      .component("dog", dog);
    })();