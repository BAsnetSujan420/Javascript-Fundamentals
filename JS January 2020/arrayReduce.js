
//reduce(function(accumulator, currentValue, index, array), initialValue)

const numbers = [1, 8, 7, 4, 9, 11];

let sum = numbers.reduce((total, value) => total + value);

console.log(sum);  // 40