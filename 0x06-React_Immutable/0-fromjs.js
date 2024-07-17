import { fromJS } from 'immutable';

// The function to convert object to Immutable Map
function getImmutableObject(object) {
  // Convert object to Immutable Map
  const immutableMap = fromJS(object);
  return immutableMap;
}

export default getImmutableObject;
