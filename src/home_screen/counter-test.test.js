import { pokeCount } from './display.js';

const pokemon = [
  { id: 448, name: 'pokemon1' },
  { id: 473, name: 'pokemon2' },
  { id: 260, name: 'pokemon3' },
  { id: 245, name: 'pokemon4' },
  { id: 150, name: 'pokemon5' },
  { id: 6, name: 'pokemon6' },
];

describe('count items on page', () => {
  test('input an array with 6 elements', () => {
    expect(pokeCount(pokemon)).toEqual(6);
  });
});