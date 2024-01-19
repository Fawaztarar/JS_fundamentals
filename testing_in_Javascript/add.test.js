// add.test.js

// Import the function to be tested
const add = require('./add');

describe('add', () => {
it('adds 2 and 2', () => {
    // Arrange
    const result = add(2, 2);

    // Act & Assert
    expect(result).toBe(4);
});

it('adds 0 and 5', () => {
    // Arrange
    const result = add(0, 5);

    // Act & Assert
    expect(result).toBe(5);
});

  // Add more test cases as needed
});
