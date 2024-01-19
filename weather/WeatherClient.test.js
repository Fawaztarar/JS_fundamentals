// Weather.test.js
const Weather = require('./Weather');
const WeatherClient = require('./WeatherClient');
const fetch = require('node-fetch');

jest.mock('./WeatherClient');
jest.mock('node-fetch');

describe('Weather', () => {
  const mockCity1 = 'London';
  const mockCity2 = 'Paris';

  beforeEach(() => {
    process.env.OPENWEATHER_API_KEY = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // Replace with your actual API key
    jest.resetAllMocks(); // Use jest.resetAllMocks() instead of fetch.mockReset()
    WeatherClient.mockClear();
  });

  test('should load weather data for a city and display it', async () => {
    const mockResponse = { main: { temp: 20 }, name: mockCity1 };
    WeatherClient.prototype.fetchWeatherData.mockResolvedValueOnce(mockResponse);

    const weather = new Weather();
    await weather.load(mockCity1);

    expect(weather.getWeatherData()).toEqual(mockResponse);
  });

  test('should compare the weather of two cities', async () => {
    const mockResponse1 = { main: { temp: 20 }, name: mockCity1 };
    const mockResponse2 = { main: { temp: 25 }, name: mockCity2 };

    WeatherClient.prototype.fetchWeatherData
      .mockResolvedValueOnce(mockResponse1)
      .mockResolvedValueOnce(mockResponse2);

    const weather = new Weather();
    await weather.compareWith(mockCity1); // Ensure the first call is for mockCity1
    await weather.compareWith(mockCity2);

    expect(weather.weatherClient.fetchWeatherData).toHaveBeenNthCalledWith(1, mockCity1);
    expect(weather.weatherClient.fetchWeatherData).toHaveBeenNthCalledWith(2, mockCity2);

    // Add your expectations for console.log output based on the weather comparison logic
  });
});

