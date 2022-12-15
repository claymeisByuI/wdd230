// select HTML elements in the document

const cityId = "id=5405878";
const APIkey = "868c8b5b6790ba5b198dba4ea32220f8";
const apiNowURL = `//api.openweathermap.org/data/2.5/weather?${cityId}&appid=${APIkey}&units=imperial`;
const apiForecastURL = `//api.openweathermap.org/data/2.5/forecast?${cityId}&appid=${APIkey}&units=imperial`;
let weather = {};
async function apiTodayFetch(url) {
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
async function apiForecastFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      weather = data;
      let today = new Date();
      //tomorrow 
      //today.setDate(today.getDate() + 1);
      console.log(today)
      let forecast = {
        "day_0":{"temps":[]},
        "day_1":{"temps":[]},
        "day_2":{"temps":[]},
        "day_3":{"temps":[]},
        "day_4":{"temps":[]},
        "day_5":{"temps":[]},
        "day_6":{"temps":[]},
      };
      weather.list.forEach((value, index) =>{
        let weatherDate = new Date(value.dt * 1000);
        let daynum = dateDiffInDays(today,weatherDate);
        forecast["day_" + daynum].dayname = weatherDate.toLocaleDateString('en', { weekday: 'long', });
        forecast["day_" + daynum].temps.push(value.main.temp); 
        forecast["day_" + daynum].average = average(forecast["day_" + daynum].temps).toFixed(2);
        forecast["day_" + daynum].min = Math.min(...forecast["day_" + daynum].temps) ;
        forecast["day_" + daynum].max = Math.max(...forecast["day_" + daynum].temps);
        /// if its a daytime weather
        if(value.sys.pod == "d"){
          forecast["day_" + daynum].weatherCode = value.weather[0].icon;
          forecast["day_" + daynum].weatherText = value.weather[0].main;
        }
      })

      displayForecastResults(document.getElementById("weather-day-1"), forecast.day_1)
      displayForecastResults(document.getElementById("weather-day-2"), forecast.day_2)
      displayForecastResults(document.getElementById("weather-day-3"), forecast.day_3)
      console.dir(forecast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiTodayFetch(apiNowURL);
apiForecastFetch(apiForecastURL);


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

function displayForecastResults(element, weatherData){
  const dayOfWeek = element.querySelector(".dayOfWeek");
  const currentTemp = element.querySelector('.tempurature');
  const weatherIcon = element.querySelector('.weather-icon');
  const iconsrc = `//openweathermap.org/img/w/${weatherData.weatherCode}.png`;
  dayOfWeek.textContent = weatherData.dayname;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherData.weatherText);
  currentTemp.textContent = `${weatherData.min}  - ${weatherData.max}`;
}

function capitalize(str)
{
  const words = str.split(" ");
  
  return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
}

const average = array => array.reduce((a, b) => a + b) / array.length;

function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}