(function() {
    function ServiceController() {
      let vm = this;
      vm.zelda = "http://media.bestofmicro.com/N/T/415577/gallery/TheLegendOfZelda_w_500.png";
      vm.puppy = "http://www.lovethispic.com/uploaded_images/91269-Puppy-Wants-To-Go-For-A-Walk.jpg";
    }
    
    angular
      .module("app")
      .controller("ServiceController", ServiceController);
    })();