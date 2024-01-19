// Weather.js
const WeatherUI = require('./WeatherUI');
const WeatherClient = require('./WeatherClient');

class Weather {
  constructor(weatherClient) {
    this.weatherClient = weatherClient;
    this.city = '';
    this.weatherData = null;
    this.weatherUI = new WeatherUI();
  }

  async load(city) {
    this.weatherData = await this.weatherClient.fetchWeatherData(city);
  }

  getWeatherData() {
    return this.weatherData;
  }

  async refreshWeatherData() {
    try {
      const weatherData = await this.weatherClient.fetchWeatherData(this.city);
      this.weatherUI.displayWeather(weatherData);
    } catch (error) {
      console.error(error.message);
    }
  }

  async compareWith(city) {
    try {
      const currentWeather = await this.weatherClient.fetchWeatherData(this.city);
      const otherWeather = await this.weatherClient.fetchWeatherData(city);

      if (currentWeather.main.temp > otherWeather.main.temp) {
        console.log(`${this.city} is warmer than ${city}`);
      } else if (currentWeather.main.temp < otherWeather.main.temp) {
        console.log(`${city} is warmer than ${this.city}`);
      } else {
        console.log(`${this.city} and ${city} have the same temperature`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = Weather;
