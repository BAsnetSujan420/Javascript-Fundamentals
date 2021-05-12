/**
 * convert object into array to make object iterable
 * foreach, filter, map and reduce method is not available for Objects
 */

const obj = {cat: 'meow', dog: 'woof', alien: '???'}

console.log(Object.keys(obj));   // [ 'cat', 'dog', 'alien' ]

console.log(Object.values(obj)); // [ 'meow', 'woof', '???' ]

console.log(Object.entries(obj)); 

// [ [ 'cat', 'meow' ], [ 'dog', 'woof' ], [ 'alien', '???' ] ]
