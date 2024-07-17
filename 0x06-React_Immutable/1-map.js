// Import Immutable.js
import { Map } from 'immutable';

// The function to convert object to Immutable Map
function getImmutableObject(object) {
    // Convert object to Immutable Map
    const immutableMap = Map(object);
    return immutableMap;
}

export default getImmutableObject;
