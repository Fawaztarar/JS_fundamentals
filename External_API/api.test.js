// api.test.js

const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('fetches Pokemon information correctly', async () => {
    const pokemonInfo = await fetchPokemon('charizard');

    expect(pokemonInfo).toEqual({
      name: 'charizard',
      id: 6,
      height: 17,
      weight: 905,
      types: ['fire', 'flying'],
    });
  });

  it('handles errors gracefully', async () => {
    // Assuming an invalid Pokemon name will result in an error
    await expect(fetchPokemon('invalidPokemon')).rejects.toThrowError(
      'Error fetching Pokemon:'
    );
  });
});
