changeTextForId = function(id, newText){
  document.getElementById(id).innerHTML = newText;
}

//ADD the key and change units to imperial
const cityId = 4682688;
const APIkey = "868c8b5b6790ba5b198dba4ea32220f8";
const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${APIkey}&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.dir(weatherInfo);
    changeTextForId("place", weatherInfo.name);
    changeTextForId("currentTemp", weatherInfo.main.temp);
    changeTextForId("windSpeed", weatherInfo.wind.speed);
    const icon_path = `//openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
    
    

 }); //end of "then" fat arrow function



