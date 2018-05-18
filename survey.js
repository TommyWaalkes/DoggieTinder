"use strict";
{
  const survey = {
    template: `<div>
    <div ng-repeat="q in $ctrl.questions">
        <h2> {{q.questionText}}</h2>
        
        <input name="{{q.questionName}}"  type="{{q.answerFormat}}" />
    </div>
        <button ng-click="$crtl.getResponses();"> Find a Friend! </button>
    </div>`,
    controller: function($location, $http){
      let vm = this;
      vm.getResponses =()=> {
        console.log("hi");
        $location.path("/dog");
      };
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
        }];
      }
  };
  survey.$inject = [ "$location", "$http"];

  angular
    .module("app")
    .component("survey", survey);
}