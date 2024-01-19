// Weather.test.js
const nock = require('nock');
const Weather = require('./Weather');

// Use the actual API URL or replace it with your API endpoint
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

describe('Weather', () => {
  let weather;

  beforeEach(() => {
    weather = new Weather();
  });

  it('should load weather data from the API', async () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed';
    const city = 'Bristol';
    const apiUrl = `${API_URL}?q=${city}&appid=${apiKey}`;

    // Mock the API response using nock
    nock('http://api.openweathermap.org')
      .get('/data/2.5/weather')
      .query(true)
      .reply(200, {
        name: 'Bristol',
        main: { temp: 20 },
      });

    // Make an actual API call using axios
    await weather.load(city);

    // You can add more expectations based on your actual logic
    expect(weather.getWeatherData()).toEqual({
      name: 'Bristol',
      main: { temp: 20 },
    });
  });
});

// Rest of the Weather.js file remains unchanged

