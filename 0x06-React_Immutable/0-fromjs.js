// Import Immutable.js
const { fromJS } = require('immutable');

// Define the function to convert object to Immutable Map
function getImmutableObject(object) {
    // Convert object to Immutable Map
    const immutableMap = fromJS(object);
    return immutableMap;
}

module.exports = {
    getImmutableObject
};
