(function($http) {


    function RoutingController($location, $http) {
      let vm = this;
      vm.message = "<p>Tommy</p>";
      vm.zip = 0;
      vm.name= "Spot";
      vm.breed= "German Shepard";
      vm.questions =[
          {
              questionText: "What is your Zip Code?",
              answerFormat: "number",
              questionName: "zip"
          },
          {
            questionText: "Do you have kids?",
            answerFormat: "checkbox",
            questionName: "kids"
          },
          {
            questionText: "Do you have other dogs?",
            answerFormat: "checkbox",
            questionName: "otherDogs"
          },
          {
            questionText: "Do you have cats?",
            answerFormat: "checkbox",
            questionName: "cats"
          }
      ],
      vm.GetSurveyResponses = function($location, $http){
        console.log("hi!");

            let key = "1c7c018131af9f16f9c3c2a23f63029c";
            var url = "http://api.petfinder.com/pet.getRandom?key="+key+"&animal=dog&format=json";
        // Get data from the url then when it arrives, set it on the scope.
        $http.get(url).then(function(response) {
            $scope.dog = response.petfinder.petIds[0];

        });

       // $location.path('/dog');
      }

    }

    
    angular
      .module("app")
      .controller("RoutingController", RoutingController)
    })();