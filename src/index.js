// date
let today = document.querySelector("#today");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
today.innerHTML = `${day} ${hours}:${minutes}`;

function cityWeather(response) {
  console.log(response.data.main.temp);
  let currentTemp = document.querySelector("#degrees");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}
function searchCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let input = document.querySelector("#search-city");
  h1.innerHTML = `${input.value}`;
  //
  //
  let city = input.value;
  let apiKey = "e96362f7a3e49741bc7f62bcb18d316c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(cityWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function degreesCelsius(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = 20;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", degreesCelsius);

function degreesFahrenheit(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = 90;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", degreesFahrenheit);

// weather API

//function currentLocation(event) {
// event.preventDefault();
//navigator.geolocation.getCurrentPosition(here);
//}
//
function here(response) {
  let currentPlace = response.data.name;
  console.log(currentPlace);
  let h1 = document.querySelector("h1");
  h1.innerHTML = currentPlace;
  let currentTemp = document.querySelector("#degrees");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}
function showPosition(position) {
  console.log(position.coords.latitude);
  let lat = position.coords.latitude;
  console.log(position.coords.longitude);
  let lon = position.coords.longitude;
  let apiKey = "e96362f7a3e49741bc7f62bcb18d316c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(here);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLoc = document.querySelector("#current-location");
currentLoc.addEventListener("click", currentLocation);
