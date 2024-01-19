// Thermostat.test.js

const Thermostat = require('./Thermostat');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  test('initial temperature is 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('increases temperature', () => {
    thermostat.increaseTemperature();
    expect(thermostat.getTemperature()).toBe(21);
  });

  test('decreases temperature', () => {
    thermostat.decreaseTemperature();
    expect(thermostat.getTemperature()).toBe(19);
  });

  test('does not decrease below min temperature', () => {
    thermostat.temperature = thermostat.minTemperature;
    thermostat.decreaseTemperature();
    expect(thermostat.getTemperature()).toBe(thermostat.minTemperature);
  });

  test('toggles power saving mode', () => {
    thermostat.togglePowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  test('resets temperature to 20', () => {
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('returns low energy usage', () => {
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toBe('low-usage');
  });

  test('returns medium energy usage', () => {
    thermostat.temperature = 22;
    expect(thermostat.energyUsage()).toBe('medium-usage');
  });

  test('returns high energy usage', () => {
    thermostat.temperature = 26;
    expect(thermostat.energyUsage()).toBe('high-usage');
  });

  test('gets max temperature with power saving mode on', () => {
    expect(thermostat.getMaxTemperature()).toBe(25);
  });

  test('gets max temperature with power saving mode off', () => {
    thermostat.togglePowerSavingMode();
    expect(thermostat.getMaxTemperature()).toBe(32);
  });
});












