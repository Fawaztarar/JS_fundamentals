// shoppingBasket.js

class ShoppingBasket {
    constructor() {
    this.items = [];
    }

    addItem(item) {
    this.items.push(item);
    }

    getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
}

// basket.addItem(new Candy('Skittle', 3.99));
module.exports = ShoppingBasket;
