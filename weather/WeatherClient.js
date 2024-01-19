

class WeatherClient {
  async fetchWeatherData(city) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching weather data: ${error.message}`);
    }
  }
}

module.exports = WeatherClient;


