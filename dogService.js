"use strict";
{
    function DogService(){
        let dogBoi = {
            name :"wolfie",
            breed : "Border Collie",
            color: "brown",
            size: "large",
            bark : "arf"
        };
        const getDog= () => {
            return dogBoi;
        };

        const setDog = (newBoi) =>{
            dogBoi = newBoi;
        };

        return{
            getDog,
            setDog
        }
    }

    angular
        .module("app")
        .service("DogService", DogService)
}