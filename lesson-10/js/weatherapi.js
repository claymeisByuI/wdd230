// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const cityId = "q=Fairbanks";
const APIkey = "868c8b5b6790ba5b198dba4ea32220f8";
const apiURL = `//api.openweathermap.org/data/2.5/weather?${cityId}&appid=${APIkey}&units=imperial`;
let weather = {};
async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `//openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalize(weatherData.weather[0].description);
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function capitalize(str)
{
  const words = str.split(" ");

  return words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
  }
