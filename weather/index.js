// file: index.js




const WeatherClient = require('./WeatherClient');
const Weather = require('./Weather');

// Example usage
const client = new WeatherClient();
const weather = new Weather(client);

// Load weather data for a city
weather.load('Bristol').then(() => {
  // After some time, get and log the weather data
  const weatherData = weather.getWeatherData();
  console.log(`Weather data for ${weatherData.name}:`);
  console.log(weatherData);
});

module.exports = Weather;




