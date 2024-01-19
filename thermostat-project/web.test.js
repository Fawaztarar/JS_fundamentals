// // //web.test.js

// const request = require('supertest');
// const express = require('express');
// const app = express();

// const Thermostat = require('./Thermostat');

// const thermostat = new Thermostat();

// // Import your routes from web.js
// require('./web');

// describe('Thermostat API', () => {
//   // Use a different port for testing
//   const testPort = 3001;
//   let server;

//   beforeAll((done) => {
//     server = app.listen(testPort, () => {
//       console.log(`Test server listening on http://localhost:${testPort}`);
//       done();
//     });
//   });

//   afterAll((done) => {
//     // Close the server after all tests are complete
//     server.close(() => {
//       console.log('Test server closed');
//       done();
//     });
//   });

//   it('should get the current temperature', async () => {
//     const response = await request(app).get('/temperature');
//     expect(response.status).toBe(200);
//     expect(response.body.temperature).toBeDefined();
//   });

//   it('should increase the temperature', async () => {
//     const response = await request(app).post('/up');
//     expect(response.status).toBe(200);
//     expect(response.body.message).toContain('Temperature increased');
//   });

//   it('should decrease the temperature', async () => {
//     const response = await request(app).post('/down');
//     expect(response.status).toBe(200);
//     expect(response.body.message).toContain('Temperature decreased');
//   });

//   it('should reset the thermostat temperature', async () => {
//     const response = await request(app).delete('/temperature');
//     expect(response.status).toBe(200);
//     expect(response.body.message).toContain('Thermostat temperature reset');
//   });

//   it('should toggle power-saving mode', async () => {
//     const response = await request(app).post('/power-saving-mode');
//     expect(response.status).toBe(200);
//     expect(response.body.powerSavingMode).toBeDefined();
//   });
// });
