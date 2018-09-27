const API_KEY = "31c7d63493cc48093f4aefb52adbc7fc"

function handleFormSubmit(event) {
  event.preventdefault();
  let city = document.queryselector('#city').value;
  
  fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
let url = 'http://awi.openweathermap.org/data/2.5/weather?q=${city}&units=imperial@appid=${api_key}'
fetch(url)
.then(data => data.json() )
.then(convertedData => displayCurrentWeather(concertedData));
  
  
}

function displayCurrentWeather(imputtedData) {
  //render current weather data to the DOM using provided IDs and json from API

  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
})
