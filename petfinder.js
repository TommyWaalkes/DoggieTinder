var app = angular.module("app");

// URL: https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json

app.controller('petfinderController', function($scope, $http) {

    let key = "1c7c018131af9f16f9c3c2a23f63029c";
    var durl = "http://api.petfinder.com/pet.getRandom?key="+key+"&animal=dog";
    // Get data from the url then when it arrives, set it on the scope.
    $scope.url = durl;
    console.log(durl)
    
    $http.jsonp(
         'http://api.petfinder.com/pet.getRandom?key=1c7c018131af9f16f9c3c2a23f63029c&animal=dog'
    ).success(function(data) {
        //$scope.dog = response.data.petfinder.petIds.id;
        console.log(data);
    }).error(function (){
        window.alert("-3");
    });

   //$.getJSON('http://api.petfinder.com/pet.getRandom?format=json&animal=dog&key='+key+'&callback=?')
  // .done(function(petApiData) { alert('Data retrieved!'); alert(petApiData.petfinder.petIds.id); $scope.dog = petApiData.petfinder.petIds.id; })
   //.error(function(err) { alert('Error retrieving data!'); 
// });
});