const numbers = [1, 2, 3, 4, 5]

// reversing shallow copy of numbers
const newArr = numbers.concat().reverse();

console.log(newArr);    //  [ 5, 4, 3, 2, 1 ]
console.log(numbers);    //  [ 1, 2, 3, 4, 5 ]


// Example : reversing sentence

const str = "Learning is Fun!"

const res = str.split('').reverse().join('');

console.log(res);  // !nuF si gninraeL

