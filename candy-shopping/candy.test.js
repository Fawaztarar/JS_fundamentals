const Candy = require('./candy');


// Jest test to return the name of the candy
describe('Candy', () => {
    it('should return the name of the candy', () => {
        const candy = new Candy('Snickers', 1.5);
        expect(candy.getName()).toBe('Snickers');
    });
});
// Jest test to return the price of the candy
describe('Candy', () => {
    it('should return the price of the candy', () => {
        const candy = new Candy('Snickers', 1.5);
        expect(candy.getPrice()).toBe(1.5);
    });
});