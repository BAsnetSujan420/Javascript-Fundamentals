const numbers = [1, 2, 3, 4, 5];

// remove three elements starting from index 2
const deleted = numbers.splice(2, 3);

console.log(deleted);      // [ 3, 4, 5 ]
console.log(numbers);     // [ 1, 2 ]

// add elements starting from index 2
numbers.splice(2, 0, 6, 7, 10, 20, 3, 4, 5);

console.log(numbers);  // [ 1, 2, 6, 7, 10, 20, 3, 4, 5 ] 
