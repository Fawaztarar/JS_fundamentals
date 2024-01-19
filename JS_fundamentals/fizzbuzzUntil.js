// This challenge builds on the previous one, where you defined a fizzBuzz function.

// Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers from 1 to the given one, call the fizzBuzz function for the current number and print the result.

// For example, if we call:
// fizzbuzzUntil(10);

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz

// fizzbuzzUntil.js
// fizzbuzzUntil.js
// fizzbuzzUntil.js
// fizzbuzzUntil.js
const fizzBuzz = require('./fizzBuzz');

const fizzbuzzUntil = (endNumber) => {
    for (let i = 1; i <= endNumber; i++) {
        console.log(fizzBuzz(i));
    }
};

module.exports = fizzbuzzUntil;







