// candy.js

class Candy {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }

    getName() {
    return this.name;
    }

    getPrice() {
    return this.price;
    }
}

module.exports = Candy;


const candy = new Candy('Mars', 4.99)


// const Candy = require('./candy');