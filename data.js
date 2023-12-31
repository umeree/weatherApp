const apikey = "bdd71130301ebe15247b9e1d6b4b9e7c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=helsinki";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  console.log(data);
}

console.log("JavaScript is running!"); // Add this line to check if the script is executing

// searchBtn?.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
checkWeather();
