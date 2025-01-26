const weatherCodeField = document.getElementById("weatherCodeField");
const temperatureField = document.getElementById("temperatureField");
const windSpeedField = document.getElementById("windSpeedField");
const relativeHumidityField = document.getElementById("relativeHumidityField");
const precipitationProbabilityField = document.getElementById("precipitationProbabilityField");

export function updateFrontend(statisticObject) {
    weatherCodeField.innerText = statisticObject.weatherCode;
    temperatureField.innerText = statisticObject.temperature2m;
    windSpeedField.innerText = statisticObject.windSpeed10m;
    relativeHumidityField.innerText = statisticObject.relativeHumidity2m;
    precipitationProbabilityField.innerText = statisticObject.precipitationProbability;
}