// WeatherUI.js


class WeatherUI {
    displayWeather(weatherData) {
      console.log(`City:         ${weatherData.name}`);
      console.log(`Weather:      ${weatherData.weather[0].main}`);
      console.log(`Temperature:  ${weatherData.main.temp}`);
      console.log(`Feels like:   ${weatherData.main.feels_like}`);
      console.log(`Humidity:     ${weatherData.main.humidity}%`);
    }
  }
  
  module.exports = WeatherUI;
  