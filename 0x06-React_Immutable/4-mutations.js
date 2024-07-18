import { Map } from 'immutable';

// Create an Immutable Map named map
const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

// Modify the values for index 2 and index 4 in map to 'Benjamin' and 'Oliver', respectively
const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

export default {
  map,
  map2
};
