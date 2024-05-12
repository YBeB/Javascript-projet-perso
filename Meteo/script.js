
// Fonction pour récupérer des données depuis le fichier JSON
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du chargement du JSON", error);
    return null;
  }
}

async function displayData() {
  let countryweather = document.querySelector(".weather-time");
  let imageweather = document.querySelector(".mini-icone");
  let weatherInfo = document.querySelector(".weather-info");
  let townWeather = document.querySelector(".town-weather");
  let weatherData = await fetchData(url);
  let weatherLocation = weatherData.location;
  let weatherCurrent = weatherData.current;
  let weatherCondition = weatherCurrent.condition;
  imageweather.src = `${weatherCondition.icon}`;
  imageweather.style.width='95px'
  if (weatherData) {
    townWeather.textContent = `${weatherLocation.name},${weatherLocation.region}`;

    countryweather.textContent = `${weatherLocation.localtime},${weatherCurrent.temp_c}°C`;
    weatherInfo.appendChild(townWeather);
  } else {
    countryweather.textContent = `No info`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayData();
  setInterval(displayData, 30000);
});
