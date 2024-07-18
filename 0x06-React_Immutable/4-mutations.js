import { Map } from 'immutable';

// Create and export a constant named map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

// Export a second constant named map2
// Modify the value for index 2 to 'Benjamin' and index 4 to 'Oliver'
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
