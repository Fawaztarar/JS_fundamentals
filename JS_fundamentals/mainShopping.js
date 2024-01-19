// Example usage in another file (e.g., main.js)

const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

const candy = new Candy('Mars', 4.99);

console.log(candy.getName()); // 'Mars'
console.log(candy.getPrice()); // 4.99

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); // 0

basket.addItem(candy);
console.log(basket.getTotalPrice()); // 4.99

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice()); // 12.97
