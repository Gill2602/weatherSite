/**
 * gestira il recupero dei dati interresati all'interno di un JSON.
 */

export function extractCoordinateFrom(object) {

    // Controllo che ci siano dei dati 
    if (!object.results) {
        throw new Error("Location not valid");
    }

    // Estraggo i dati all'interno del object
    const latitude = object.results[0].latitude;
    const longitude = object.results[0].longitude;
    
    // Log dei dati
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);

    return {
        latitude: latitude,
        longitude: longitude
    };
}

export function extractWeatherStatisticFrom(object) {

    // Ottieni l'ora attuale
    const now = new Date();
    // Estrai l'ora in GMT che usero come indice
    const gmtHours = now.getUTCHours();

    // Prendo i dati all'interno dell'oggetto
    const weather_code = object.hourly.weather_code[gmtHours];
    const temperature_2m = object.hourly.temperature_2m[gmtHours];
    const wind_speed_10m = object.hourly.wind_speed_10m[gmtHours];
    const relative_humidity_2m = object.hourly.relative_humidity_2m[gmtHours];
    const precipitation_probability = object.hourly.precipitation_probability[gmtHours];

    // Log dei dati
    console.log("Weather Data at GMT Hour:", gmtHours);
    console.log("Weather Code:", weather_code);
    console.log("Temperature at 2m (°C):", temperature_2m);
    console.log("Wind Speed at 10m (km/h):", wind_speed_10m);
    console.log("Relative Humidity at 2m (%):", relative_humidity_2m);
    console.log("Precipitation Probability (%):", precipitation_probability);

    return {
        gmtHour: gmtHours,
        weatherCode: weather_code,
        temperature2m: temperature_2m,
        windSpeed10m: wind_speed_10m,
        relativeHumidity2m: relative_humidity_2m,
        precipitationProbability: precipitation_probability
    };
}
