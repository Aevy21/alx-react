import accessImmutableObject from './accessImmutableObject.js';

// Example object
const exampleObject = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

// Example path
const path = ['name', 'first'];

// Test the function
console.log(accessImmutableObject(exampleObject, path)); // Output: 'Guillaume'
