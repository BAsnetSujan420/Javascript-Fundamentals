const numbers = [1, 2, 3]

//push method adds element to end of array and returns length of array
const total = numbers.push(4, 5, 6, 7, 8, 0);

console.log(numbers);   //  [ 1, 2, 3, 4, 5, 6, 7, 8, 0 ]

console.log(total);     // 9


//pop method removes last element and return it
const lastItem = numbers.pop();

console.log(numbers);   //  [ 1, 2, 3, 4, 5, 6, 7, 8]

console.log(lastItem);  // 0
