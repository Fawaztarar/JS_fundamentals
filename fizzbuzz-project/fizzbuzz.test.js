const fizzbuzz = require('./fizzbuzz');


// test to return fizzbuzz if number is divisible by 3 and 5
describe('fizzbuzz', () => {
    it('should return fizzbuzz if number is divisible by 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });
});
// test to return fizz if number is divisible by 3
describe('fizzbuzz', () => {
    it('should return fizz if number is divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });
});
// test to return buzz if number is divisible by 5
describe('fizzbuzz', () => {
    it('should return buzz if number is divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });
})
// test to return number string for other cases
describe('fizzbuzz', () => {
    it('should return number string for other cases', () => {
        expect(fizzbuzz(7)).toBe('7');
    });
})