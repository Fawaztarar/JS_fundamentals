//runThermostat.js

const Thermostat = require('./Thermostat');

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // Should return 20

thermostat.up();
thermostat.up();
thermostat.down();

console.log(thermostat.getTemperature()); // Should return 21

thermostat.setPowerSavingMode(true);
for (let i = 0; i < 10; i++) {
    thermostat.up();
}
console.log(thermostat.getTemperature()); // Should return 25

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25


console.log(thermostat.getTemperature());

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
console.log(thermostat.getTemperature()); // Should return 20
