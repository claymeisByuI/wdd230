// select HTML elements in the document

const cityId = "id=5405878";
const APIkey = "868c8b5b6790ba5b198dba4ea32220f8";
const apiURL = `//api.openweathermap.org/data/2.5/weather?${cityId}&appid=${APIkey}&units=imperial`;
let weather = {};
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      weather = data;
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(apiURL);

function displayResults(weatherData){
  const currentTemp = document.querySelector('#tempurature');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('#weather-desc');
  const windspeed = document.querySelector('#windspeed');
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  const cityElement = document.querySelector('#weatherCity');
  const iconsrc = `//openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitalize(weatherData.weather[0].description);
  windspeed.textContent = weather.wind.speed;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  cityElement.textContent = `${weatherData.name} `;
}

function capitalize(str)
{
  const words = str.split(" ");
  
  return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
}
