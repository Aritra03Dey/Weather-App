//Weather App

const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apiKey="305164d3ae656efce3adaaa6972024b6";

weatherForm.addEventListener("submit",event=>{
           event.preventDefault();

           const city=cityInput.value;

           if(city){
               try{

               }
               catch(error){
                              console.error(error);
                              displayError()
               }

           }
           
           else{
               displayError("Please enter a city")
           }
});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}
function displayError(message){
         const errorDisplay=document.createElement("p");
         errorDisplay.textContent=message;
         errorDisplay.classList.add("errorDisplay");

         card.textContent="";
         card.style.display="flex";
         card.appendChild(errorDisplay);

}