const WeatherDataTemplate = require("../templates/weather-data-template");

class OpenWeatherMapWeatherData extends WeatherDataTemplate {
    constructor(response) {
        super();

        let data = new WeatherDataTemplate();
        data.name = response.name;
        data.temp = Math.round(response.main.temp);
        data.icon = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
        data.wind_speed = response.wind.speed;
        data.wind_direction = WeatherDataTemplate.convertWindDirection(response.wind.deg);
        // Set to Upper first character of 'cloudiness'
        data.clouds = response.weather[0].description.charAt(0).toUpperCase()
            + response.weather[0].description.slice(1);
        data.pressure = response.main.pressure;
        data.humidity = response.main.humidity;
        data.lat = response.coord.lat;
        data.lon = response.coord.lon;

        return data;
    }
}

module.exports = OpenWeatherMapWeatherData;