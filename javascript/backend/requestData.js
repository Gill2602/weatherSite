/**
 * In questo JavaScrpt, verrano gestite le varie richieste alle API.
 * gestirano: richiesta e risposta dell'API, possibili errori e conversione JSON.
 */

export function getGeocodingJSON(location) {
    return requestTypeGETto(geocodingURL(location));
}

export function getWeatherForecastJSON(latitude, longitude) {
    return requestTypeGETto(weatherForecastURL(latitude, longitude));
}

async function requestTypeGETto(url) {
    let object;

    try {
        console.log("URL to get data: " + url);
        
        // Mando la richiesta all'API
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Error with the request: ${response.status}`);
        }
        console.log("Request body: ", response);

        object = await response.json();
        console.log("Json Object: ", object);

    } catch (error) {
        console.log("Error with API: ", error);
    }

    return object;
}

function weatherForecastURL(latitude, longitude) {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m&timezone=GMT&forecast_days=1`;
}

function geocodingURL(location) {
    return `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en`
}