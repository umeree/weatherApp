const apikey = "bdd71130301ebe15247b9e1d6b4b9e7c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sydney";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;

  console.log(data);
}
checkWeather();
