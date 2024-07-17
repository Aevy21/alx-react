import { Map } from 'immutable';

// Create the initial Immutable Map
const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create map2 by modifying values from map
const map2 = map.withMutations((mutableMap) => {
  mutableMap.set(2, 'Benjamin');
  mutableMap.set(4, 'Olivia');
});

// Export map and map2
export { map, map2 };
