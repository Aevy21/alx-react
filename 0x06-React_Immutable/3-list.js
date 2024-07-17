import { List } from 'immutable';

// Function to convert array to Immutable List
export function getListObject(array) {
  const immutableList = List(array);
  return immutableList;
}

// Function to add element to Immutable List
export function addElementToList(list, element) {
  const updatedList = list.push(element);
  return updatedList;
}
