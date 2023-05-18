var config = require('../config/weather-config');


async function getWeatherForecast(query) {

    const params = new URLSearchParams();
    params.append('q', query);
    params.append('units', config.weather_unit);
    params.append('cnt', config.weather_count);
    params.append('appid', config.api_key);

    const response = await fetch(`${config.weather_forecast}?${params}`);
    return await response.json();
}

module.exports = { getWeatherForecast}