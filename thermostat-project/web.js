// web.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const Thermostat = require('./Thermostat');

// Instantiate the Thermostat class
const thermostat = new Thermostat();

// Route to serve the thermostat HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Thermostat.html'));
});

// Route to get the current temperature
app.get('/temperature', (req, res) => {
  const currentTemperature = thermostat.getTemperature();
  res.json({ temperature: currentTemperature });
});

// Route to increase the temperature
app.post('/up', (req, res) => {
  thermostat.increaseTemperature();
  const currentTemperature = thermostat.getTemperature();
  res.json({ message: `Temperature increased. Current Temperature: ${currentTemperature}°C` });
});

// Route to decrease the temperature
app.post('/down', (req, res) => {
  thermostat.decreaseTemperature();
  const currentTemperature = thermostat.getTemperature();
  res.json({ message: `Temperature decreased. Current Temperature: ${currentTemperature}°C` });
});

// Route to reset the thermostat temperature
app.delete('/temperature', (req, res) => {
  thermostat.resetTemperature();
  const currentTemperature = thermostat.getTemperature();
  res.json({ message: `Thermostat temperature reset. Current Temperature: ${currentTemperature}°C` });
});

// Route to toggle power-saving mode
app.post('/power-saving-mode', (req, res) => {
  thermostat.togglePowerSavingMode();
  const powerSavingMode = thermostat.isPowerSavingModeOn();
  res.json({ powerSavingMode: powerSavingMode });
});

// Start the server only if the module is not required by another module
if (!module.parent) {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}


// const express = require('express');
// const app = express();
// const port = 3000;

// const Thermostat = require('./Thermostat');

// // Instantiate the Thermostat class
// const thermostat = new Thermostat();

// // Route to get the current temperature
// app.get('/temperature', (req, res) => {
//   const currentTemperature = thermostat.getTemperature();
//   res.json({ temperature: currentTemperature });
// });

// // Route to increase the temperature
// app.post('/up', (req, res) => {
//   thermostat.increaseTemperature();
//   const currentTemperature = thermostat.getTemperature();
//   res.json({ message: `Temperature increased. Current Temperature: ${currentTemperature}°C` });
// });

// // Route to decrease the temperature
// app.post('/down', (req, res) => {
//   thermostat.decreaseTemperature();
//   const currentTemperature = thermostat.getTemperature();
//   res.json({ message: `Temperature decreased. Current Temperature: ${currentTemperature}°C` });
// });

// // Route to reset the thermostat temperature
// app.delete('/temperature', (req, res) => {
//   thermostat.resetTemperature();
//   const currentTemperature = thermostat.getTemperature();
//   res.json({ message: `Thermostat temperature reset. Current Temperature: ${currentTemperature}°C` });
// });

// // Route to toggle power-saving mode
// app.post('/power-saving-mode', (req, res) => {
//   thermostat.togglePowerSavingMode();
//   const powerSavingMode = thermostat.isPowerSavingModeOn();
//   res.json({ powerSavingMode: powerSavingMode });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });
