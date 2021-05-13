const numbers = [1, 2, 3]

// unshift method adds elements to start of array and return length of array
const total = numbers.unshift(-1, 0);

console.log(numbers);  // [ -1, 0, 1, 2, 3 ]

console.log(total);    // 5


// shift method removes first element of array and returns removed element
const firstItem = numbers.shift();

console.log(numbers);   //  [ 0, 1, 2, 3 ]

console.log(firstItem); // -1
