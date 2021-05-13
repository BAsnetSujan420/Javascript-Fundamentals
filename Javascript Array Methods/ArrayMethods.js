const str = '1234567';

//Array.from method converts to array of strings by default
const res = Array.from(str, num => Number(num));

console.log(res);  // [ 1, 2, 3, 4, 5, 6, 7 ]

// another way
const res2 = Array.from(str, Number);

console.log(res2);  // [ 1, 2, 3, 4, 5, 6, 7 ]

// checking if it is array or not
const names = ['Florin', 'Ivan', 'Liam'];
const str = "Hello World";

console.log(Array.isArray(names));  // true
console.log(Array.isArray(str));    // false


//Example : Making new array removing duplicate values

const numbers = [1, 2, 3, 3, 2, 1, 4, 1, 3]

const arr = Array.from(new Set(numbers));

console.log(arr); // [ 1, 2, 3, 4 ]
