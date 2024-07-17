import { List, Map } from 'immutable';

// Function to concatenate elements of two arrays into a List
function concatElements(page1, page2) {
    // Concatenate arrays and convert to Immutable List
    return List(page1.concat(page2));
}

// Function to merge elements of two objects into a List
function mergeElements(page1, page2) {
    // Merge objects, giving priority to page2 values
    const mergedObject = { ...page1, ...page2 };
    
    // Convert merged object values to Immutable List
    return List(Map(mergedObject).values());
}

// Exporting as default export
export default {
    concatElements,
    mergeElements
};

