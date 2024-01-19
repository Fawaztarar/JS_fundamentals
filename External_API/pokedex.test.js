// pokedex.test.js

const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('adds Pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();

    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');

    expect(pokedex.all()).toEqual(['pikachu', 'jigglypuff']);
  });

  it('returns an empty array initially', () => {
    const pokedex = new Pokedex();

    expect(pokedex.all()).toEqual([]);
  });
});
