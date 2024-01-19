// shoppingBasket.js
class ShoppingBasket {
    constructor() {
      this.items = [];
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
  
    addItem(item) {
      this.items.push(item);
    }
  }
  
  module.exports = ShoppingBasket;






  

