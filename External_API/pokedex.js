// pokedex.js

class Pokedex {
    constructor() {
    this.pokemonList = [];
    }

    catch(pokemonName) {
      // Simulating asynchronous behavior with setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
        this.pokemonList.push(pokemonName);
        resolve();
        }, 1000); // Assume some time has passed
    });
    }

    all() {
    return this.pokemonList;
    }
}

module.exports = Pokedex;
