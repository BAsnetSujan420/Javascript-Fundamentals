// some and every methods are higher order function to pass a test on array

// arr.some(callback(currentValue, index, array))

const numbers = [3, 6, 14, 9, 244]

let overTen = numbers.some(num => num > 10);

let everyOverTen  = numbers.every(num => num > 10);


console.log(overTen);       // true

console.log(everyOverTen);   // false
