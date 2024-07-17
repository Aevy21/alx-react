import { fromJS, Seq } from 'immutable';

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to filter and print the best students
function printBestStudents(grades) {
  // Convert the object to an Immutable Map
  const gradesMap = fromJS(grades);

  // Use Seq to process the data
  const bestStudents = gradesMap
    .filter((student) => student.get('score') >= 70) // Filter students with score >= 70
    .map((student) =>
      student
        .update('firstName', (firstName) => capitalize(firstName))
        .update('lastName', (lastName) => capitalize(lastName)),
    ); // Capitalize the first and last names

  // Print the result
  console.log(bestStudents.toJS());
}

export default printBestStudents;
