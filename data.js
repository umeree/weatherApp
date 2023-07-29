const apikey = "bdd71130301ebe15247b9e1d6b4b9e7c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sydney";

async function checkWeather() {
  const response = await fetch(apiUrl + `$appid=${apikey}`);
  var data = await response.json();

  console.log(data);
}
checkWeather();
