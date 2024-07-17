import { Map, List } from 'immutable';

// Function to merge deeply and return as List
export default function mergeDeeplyElements(page1, page2) {
  // Convert the plain objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Deeply merge the two Maps
  const mergedMap = map1.mergeDeep(map2);

  // Convert the merged Map to a List
  const resultList = List(mergedMap.values());

  return resultList;
}
