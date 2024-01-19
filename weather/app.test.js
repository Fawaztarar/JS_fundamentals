// app.test.js

const readline = require('readline');
const Weather = require('./Weather');
const WeatherClient = require('./WeatherClient');

jest.mock('readline');
jest.mock('./Weather');
jest.mock('./WeatherClient');

describe('runWeatherApp', () => {
  it('should run the Weather App successfully', async () => {
    const mockCity = 'London';

    // Mock readline.question to resolve with a city
    readline.question.mockImplementationOnce((question, callback) => {
      callback(mockCity);
    });

    // Mock Weather class and its methods
    Weather.mockImplementation(() => ({
      load: jest.fn(),
      refreshWeatherData: jest.fn(),
      displayWeather: jest.fn(),
      compareWith: jest.fn(),
    }));

    // Mock WeatherClient class and its methods
    WeatherClient.prototype.fetchWeatherData.mockResolvedValueOnce({
      name: 'London',
      main: { temp: 20 },
      weather: [{ main: 'Clear' }],
    });

    await require('./app'); // Run the app

    // Expectations for function calls
    expect(readline.question).toHaveBeenCalledWith('Enter a city name: ', expect.any(Function));
    expect(Weather).toHaveBeenCalledWith(expect.any(WeatherClient));
    expect(Weather.prototype.load).toHaveBeenCalledWith(mockCity);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 5000);
    expect(Weather.prototype.displayWeather).toHaveBeenCalled();
    expect(Weather.prototype.compareWith).toHaveBeenCalled();
  });
});
