// searchCandies.test.js

const searchCandies = require('./searchCandies');



describe('searchCandies', () => {
it('returns candies starting with "Ma" and price less than 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
});

it('returns candies starting with "Ma" and price less than 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
});

it('returns candies starting with "S" and price less than 10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
});

it('returns candies starting with "S" and price less than 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
});

it('returns candies starting with "ma" (case-insensitive) and price less than 10', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
});
});

