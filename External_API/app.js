// app.js

// const fetchPokemon = require('./api');

// // Usage example
// fetchPokemon('pikachu');


// app.js

const fetchPokemon = require('./api');

// Usage example
fetchPokemon('charizard')
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.error(error));
