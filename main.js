/** Object Basics **/

// Create an object that has firstName, 
// lastName, and occupation as properties/keys associated
// with your own values.

// console.log each property's associated value from your 
// object once using both dot notation and bracket notation.

// Add a property for "hobby" to your object and an associated
// hobby value of your own

// What is the difference between dot 
// notation and bracket notation?
// ___ YOUR ANSWER HERE ___

var myPerson = {firstName: 'Josh', lastName: 'Byrd', occupation: 'software engineer'};
console.log(myPerson.firstName, myPerson.lastName, myPerson.occupation)
console.log(myPerson['firstName'], myPerson['lastName'], myPerson['occupation'])

myPerson.hobby = 'reading'
console.log(myPerson)

console.log('Although dot notation and bracket notation do similar things, bracket notation allows the use of characters that can\'t be used with dot notation.')

