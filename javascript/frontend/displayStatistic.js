const weatherCodeImage = document.getElementById("weatherCodeImage");
const temperatureField = document.getElementById("temperatureField");
const windSpeedField = document.getElementById("windSpeedField");
const relativeHumidityField = document.getElementById("relativeHumidityField");
const precipitationProbabilityField = document.getElementById("precipitationProbabilityField");

export function updateFrontend(statisticObject) {
    weatherCodeImage.src = getWeatherImage(statisticObject.weatherCode);
    temperatureField.innerText = statisticObject.temperature2m;
    windSpeedField.innerText = statisticObject.windSpeed10m;
    relativeHumidityField.innerText = statisticObject.relativeHumidity2m;
    precipitationProbabilityField.innerText = statisticObject.precipitationProbability;
}

function  getWeatherImage(weatherCode) {
    console.log(weatherCode);
    let imageSrc = "";

    switch (weatherCode) {
        case 0:
            imageSrc = "files/assets/Clear.png";
            break;
        case 1:
        case 2:
        case 3:
            imageSrc = "files/assets/Cloudy.png";
            break;
        case 45:
        case 48:
            imageSrc = "files/assets/Fog.png";
            break;
        case 51:
        case 53:
        case 55:
            imageSrc = "files/assets/Drizzle.png";
            break;
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            imageSrc = "files/assets/Rain.png";
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            imageSrc = "files/assets/Snow.png";
            break;
        case 95:
        case 96:
        case 99:
            imageSrc = "files/assets/Thunderstorm.png";
            break;
        default:
            console.log("Weather code non riconosciuto");
            break;
    }


    return imageSrc;
}