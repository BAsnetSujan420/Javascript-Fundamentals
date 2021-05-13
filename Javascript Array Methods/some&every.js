const num = [1, 2, 3, 4, 5]

// some function returns true if any of the element fulfills condition
const gtFour = numbers.some(item => item > 4);

console.log(gtFour); // true


// Example : checking if elderly people are in the list
const people = [
 {  name: "Florin", age: 25},
 {  name: "Bob", age: 60},
 {  name: "Evan", age: 18 }]

 const elderly = people.some(person => person.age > 50);
 
 console.log(elderly); // true



const numbers = [-7, 1, 2, 3, 4, 5]

// every method returns true if every element passes applied condition
const positive = numbers.every(item => item > 0);

console.log(positive);  // false


// Example : checking if every person's name is added or not
const persons = [ {name: "Jesse"}, {name: "Kyle"}, {name: "Gary"}, {surname: "Powell"}  ]

const result = persons.every(person => person.name !== undefined);

console.log(result);  // false


// Example : Checking every element of array is array or not

const arr = [[1, 2, 3], [5, 6], [9, 0, 0], 'Florin Pop'];

const res = arr.every(item => Array.isArray(item));

console.log(res);  // false
