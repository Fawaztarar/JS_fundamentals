// Weather.test.js
const Weather = require('./Weather');
const WeatherClient = require('./WeatherClient');

jest.mock('./WeatherClient');

describe('Weather', () => {
  beforeEach(() => {
    WeatherClient.mockClear();
  });

  test('should load weather data for a city', async () => {
    const mockCity = 'London';
    const mockWeatherData = { main: { temp: 20 }, name: mockCity };

    // Mock the fetchWeatherData method to return mockWeatherData
    WeatherClient.prototype.fetchWeatherData.mockResolvedValueOnce(mockWeatherData);

    const weather = new Weather(new WeatherClient());
    await weather.load(mockCity);

    // Check if the load method sets the weatherData correctly
    expect(weather.getWeatherData()).toEqual(mockWeatherData);

    // Check if fetchWeatherData was called with the correct argument
    expect(weather.weatherClient.fetchWeatherData).toHaveBeenCalledWith(mockCity);
  });

  // Add more test cases as needed
});
