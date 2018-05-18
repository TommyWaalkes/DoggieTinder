"use strict";
  {
    let dog = {
        controller: function(DogService){
          const vm = this;
          vm.boi = DogService.getDog();
        },
        template: `<div>

        <p>{{$crtl.boi.name}}</p>
        <p>{{$ctrl.boi.breed}}</p>
        <p>{{$ctrl.boi.color}}</p>
        <p>{{$ctrl.boi.size}}</p>
        <p>{{$crtl.boi.bark}}</p>
    
    
        <button>Swipe Left</button>
        <button>Swipe Right</button>
    </div>`
      };
      
      dog.$inject = ["DogService"];
    angular
      .module("app")
      .component("dog", dog);
    }
