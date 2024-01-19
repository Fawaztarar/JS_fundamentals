// Thermostat.js

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.minTemperature = 10;
      this.maxTemperaturePSMOn = 25;
      this.maxTemperaturePSMOff = 32;
      this.powerSavingMode = true;
    }
  
    getTemperature() {
      return this.temperature;
    }
  
    increaseTemperature() {
      if (this.temperature < this.getMaxTemperature()) {
        this.temperature++;
      }
    }
  
    decreaseTemperature() {
      if (this.temperature > this.minTemperature) {
        this.temperature--;
      }
    }
  
    togglePowerSavingMode() {
      this.powerSavingMode = !this.powerSavingMode;
    }
  
    resetTemperature() {
      this.temperature = 20;
    }
  
    isPowerSavingModeOn() {
      return this.powerSavingMode;
    }
  
    energyUsage() {
      if (this.temperature < 18) {
        return 'low-usage';
      } else if (this.temperature <= 25) {
        return 'medium-usage';
      } else {
        return 'high-usage';
      }
    }
  
    getMaxTemperature() {
      return this.powerSavingMode ? this.maxTemperaturePSMOn : this.maxTemperaturePSMOff;
    }
  }
  
  module.exports = Thermostat;
  


// const Thermostat = require('./thermostat');