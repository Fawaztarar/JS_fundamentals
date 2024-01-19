// multiply.test.js

// Import the function to be tested
const multiply = require('./multiply');

describe('multiply', () => {
it('multiplies 3 and 4', () => {
    // Arrange
    const result = multiply(3, 4);

    // Act & Assert
    expect(result).toBe(12);
});

it('multiplies 0 and 5', () => {
    // Arrange
    const result = multiply(0, 5);

    // Act & Assert
    expect(result).toBe(0);
});

  // Add more test cases as needed
});
