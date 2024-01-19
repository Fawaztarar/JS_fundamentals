// api.js


// api.js

const fetchPokemon = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
  
      const pokemonInfo = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name),
      };
  
      return pokemonInfo;
    } catch (error) {
      throw new Error('Error fetching Pokemon:', error.message);
    }
  };
  
  module.exports = fetchPokemon;
  

// const fetchPokemon = async (pokemonName) => {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching Pokemon:', error.message);
//     }
//   };
  
//   module.exports = fetchPokemon;
  

//   fetchPokemon('pikachu');
//   const fetchPokemon = require('./api');