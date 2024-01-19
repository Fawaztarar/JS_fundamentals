const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');


  // Mocking Jest Test to return the total price after adding a item into shopping basket
jest.mock('./candy', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getName: jest.fn().mockReturnValue('M.Snickers'),
            getPrice: jest.fn().mockReturnValue(1.5)
        }
    });
});

describe('ShoppingBasket', () => {
    it('should return the total price after adding a item into shopping basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const candy = new Candy('M.Snickers', 1.5);
        shoppingBasket.addItem(candy);
        expect(shoppingBasket.getTotalPrice()).toBe(1.5);
    });
});