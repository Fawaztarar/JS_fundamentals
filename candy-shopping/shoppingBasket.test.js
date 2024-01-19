const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');
    
  // jest test to return the total price to zero for empty shopping basket
describe('ShoppingBasket', () => {
    it('should return the total price to zero for empty shopping basket', () => {
        const shoppingBasket = new ShoppingBasket();
        expect(shoppingBasket.getTotalPrice()).toBe(0);
    });
});
  // jest test to return the total price after adding a item into shopping basket
describe('ShoppingBasket', () => {
    it('should return the total price after adding a item into shopping basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const candy = new Candy('Snickers', 1.5);
        shoppingBasket.addItem(candy);
        expect(shoppingBasket.getTotalPrice()).toBe(1.5);
    });
});
  // jest test to return the total price after adding multiple items into shopping basket
describe('ShoppingBasket', () => {
    it('should return the total price after adding multiple items into shopping basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const candy = new Candy('Snickers', 1.5);
        const candy2 = new Candy('Mars', 1.5);
        shoppingBasket.addItem(candy);
        shoppingBasket.addItem(candy2);
        expect(shoppingBasket.getTotalPrice()).toBe(3);
    });
});