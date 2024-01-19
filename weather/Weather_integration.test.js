const WeatherClient = require('./WeatherClient')
const Weather = require('./Weather')

describe('Integration tests for the Weather class', () => {
    it('gets WeatherData for a city', async () => {
        const client = new WeatherClient();
        const weather = new Weather(client);
        await weather.load('Bristol');
        const weatherData = weather.getWeatherData();
        expect(weatherData.name).toEqual('Bristol');
    });
});