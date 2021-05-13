const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// filling zeros from 3rd to 5th index
numbers.fill(0, 3, 6);
console.log(numbers);   // [ 1, 2, 3, 0, 0, 0, 7, 8, 9 ]

// filling zeros to array
const zeros = numbers.fill(0);

console.log(zeros);     // // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

console.log(numbers);  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]


// Coding Challenge: creating new array and filling numbers upto given argument

function fillInNumbers(n) {
    return Array(n).fill(0).map((_, index) => index + 1);
}

console.log(fillInNumbers(7));  // [ 1, 2, 3, 4, 5, 6, 7 ]
