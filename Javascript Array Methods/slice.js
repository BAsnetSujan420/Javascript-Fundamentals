const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// slice with start and end index
const numbers2 = numbers.slice(1, 4);
console.log(numbers2);  // [ 2, 3, 4 ]

//slice is accessor method
console.log(numbers);        //  [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// negative index
const lastThree = numbers.slice(-3);
console.log(lastThree);   // [ 6, 7, 8 ]

// shallow copy
const copy = numbers.slice();
console.log(copy);             //  //  [ 1, 2, 3, 4, 5, 6, 7, 8 ]


// Example : showing top three winners

const participants = ['Milton', 'Ignatius', 'Kinosi', 'Huey', 'Abbas', 'Bartchang']

const winners = participants.slice(0, 3);

console.log(winners);  // [ 'Milton', 'Ignatius', 'Huey' ]
