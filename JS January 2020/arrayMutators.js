
const arr = ['cat', 'dog', 'robot', 'goat']

// shallow copy of array using spread operator
const arr2 = [...arr]; 

console.log(arr.push('alien'));  // 5
console.log(arr);                // [ 'cat', 'dog', 'robot', 'goat', 'alien' ]

console.log(arr.pop()); // alien
console.log(arr);       // [ 'cat', 'dog', 'robot', 'goat' ]

console.log(arr.shift()); // cat
console.log(arr);         //  [ 'dog', 'robot', 'goat' ]

console.log(arr.unshift('martian'));   // 4
console.log(arr);                      // [ 'martian', 'dog', 'robot', 'goat' ]


// splice() method to replace elements
console.log(arr2.splice(1, 2, 'alien', 'martian'));  // [ 'dog', 'robot' ]
console.log(arr2);                                   // [ 'cat', 'alien', 'martian', 'goat' ]


/**Sorting array elements */ 

const fruits = ['banana', 'orange', 'watermelon', 'apple']
fruits.sort();
console.log(fruits);    // [ 'apple', 'banana', 'orange', 'watermelon' ]

// sorting array of numbers
const numbers = [20, 100, 6, 70, 3, 99, 7]
numbers.sort(function(a, b) {return a - b});
console.log(numbers);  // [ 3,  6,   7, 20, 70, 99, 100 ]

// reverse sort array elements
fruits.sort().reverse();
console.log(fruits);      // [ 'watermelon', 'orange', 'banana', 'apple' ]


// copyWithin(target, start, end)
fruits.copyWithin(1);
console.log(fruits);     // [ 'watermelon', 'watermelon', 'orange', 'banana' ]

fruits.copyWithin(1, 3);
console.log(fruits);       // [ 'watermelon', 'banana', 'orange', 'banana' ]

// fill(value, start, end)
fruits.fill('papaya', 1, 3);
console.log(fruits);          // [ 'watermelon', 'papaya', 'papaya', 'banana' ]

fruits.fill('papaya');
console.log(fruits);    // [ 'papaya', 'papaya', 'papaya', 'papaya' ]
