import {getGeocodingJSON, getWeatherForecastJSON} from "./requestData.js";
import {extractCoordinateFrom, extractWeatherStatisticFrom} from "./extractData.js";
import {updateFrontend} from "../frontend/displayStatistic.js";

const locationField = document.getElementById("locationField");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {
    try {
        
        let location = validateLocation(locationField.value);

        // Richiesta HTTP GET a Geocoding
        let geoObject = await getGeocodingJSON(location);
        // Recuperare Latitudine e Longitudine
        let coordinate = extractCoordinateFrom(geoObject);

        // Richiesta HTTP GET a Weather Forecast
        let weratherObject = await getWeatherForecastJSON(coordinate.latitude, coordinate.longitude);
        // Recuperare statistiche meteorologiche
        let weatherStatistic = extractWeatherStatisticFrom(weratherObject);

        // Aggiorno il frontend
        updateFrontend(weatherStatistic);
    } catch (error) {
        console.log(error);
    }
});

/**
 * Prepara la localita inserita dall'utente,
 * per la richiesta http. 
 */
function validateLocation(locationString) {
    return locationString.trim().toLowerCase();
}
