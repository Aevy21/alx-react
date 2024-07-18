import { is } from 'immutable';

// Function to compare two Immutable Maps
function areMapsEqual(map1, map2) {
  // Use Immutable.js 'is' function to compare the Maps
  return is(map1, map2);
}

// Exporting the function as default export
export default areMapsEqual;
