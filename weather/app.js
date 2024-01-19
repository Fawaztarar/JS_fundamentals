const readline = require('readline');
const Weather = require('./Weather');
const WeatherClient = require('./WeatherClient');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function runWeatherApp() {
  const city = await askForCity();
  const weather = new Weather(new WeatherClient());
  await weather.load(city);

  setInterval(async () => {
    await weather.refreshWeatherData();
    console.log('Refreshed weather data for', weather.city);
  }, 5000);

  await weather.displayWeather();
  await compareWithAnotherCity(weather);
  rl.close();
}

function askForCity() {
  return new Promise((resolve) => {
    rl.question('Enter a city name: ', (city) => {
      resolve(city);
    });
  });
}

async function compareWithAnotherCity(weather) {
  const otherCity = await askForCity();
  await weather.compareWith(otherCity);
}

runWeatherApp();

