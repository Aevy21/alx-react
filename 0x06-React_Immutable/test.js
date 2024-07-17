// Import the function from 0-fromjs.js
const { getImmutableObject } = require('./1-map');

// Test data object
const testData = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Convert the object using getImmutableObject
const immutableMap = getImmutableObject(testData);

// Print the Immutable Map
console.log(immutableMap);

