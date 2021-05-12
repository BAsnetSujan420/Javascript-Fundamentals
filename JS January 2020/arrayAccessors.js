const arr1 = [4, 8];
const arr2 = [12, 5];
const arr3 = [9, 11, 24];

const arr = arr1.concat(arr2, arr3);

console.log(arr1);  // [ 4, 8 ]
console.log(arr2);  // [ 12, 5 ]
console.log(arr3);  // [ 9, 11, 24 ]
console.log(arr); // [ 4, 8, 12, 5, 9, 11, 24 ]


const filtered = arr.filter(num => num > 5);

console.log(filtered);   //  [ 8, 12, 9, 11, 24 ]
console.log(arr);       // [ 4,  8, 12, 5, 9, 11, 24 ]


const animals = ['cat', 'dog', 'bird', 'fish'];

console.log(animals.includes("cat"));  // true
console.log(animals.includes("Dog"));  // false

console.log(animals.indexOf('whale'));  // -1
console.log(animals.indexOf('bird'));   // 2


const numbers = [3, 7, 19, 5, 7, 12]

console.log(numbers.lastIndexOf(7)); // 4

console.log(numbers.slice(3));    // [ 5, 7, 12 ]
console.log(numbers.slice(2, 4)); // [ 19, 5 ] 

console.log(numbers.toString());  // 3,7,19,5,7,12

console.log(numbers.join(" + "));  // 3 + 7 + 19 + 5 + 7 + 12