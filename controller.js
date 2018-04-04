(function() {


    function RoutingController() {
      let vm = this;
      vm.message = "<p>Tommy</p>";
      vm.zip = 0;
      vm.questions =[
          {
              questionText: "What is your Zip Code?",
              answerFormat: "number"
          },
          {
            questionText: "Do you have kids?",
            answerFormat: "checkbox"
          },
          {
            questionText: "Do you have other dogs?",
            answerFormat: "checkbox"
          },
          {
            questionText: "Do you have cats?",
            answerFormat: "checkbox"
          }
      ],
      vm.surveyResponse = function(zipCode){

      };

    }

    
    angular
      .module("app")
      .controller("RoutingController", RoutingController)
    })();