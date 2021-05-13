const numbers = [1, 2, 3, 4, 5, 6]

// reduce keeps track of the accumulator value and accumulator can be initialized
const total = numbers.reduce(sum, 0);

// callback function can have four parametes accumulator, value, index and array
function sum(accumulator, value){
    return accumulator + value;
}

console.log(total);  // 21


// Example : getting maximum value from array of numbers

const numberSet = [1, 2, 300, 66, 9, 80]

const max = numberSet.reduce(callback, -Infinity);

function callback(maxValue, value){
    if(maxValue > value){
        return maxValue;
    } else {
        return value;
    }
}

console.log(max);   // 300


// Example : Getting total value of store

const store = [
    {
        name : 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'desktop',
        price : 1500,
        count: 2
    }, {
    name: 'phone',
    price: 600,
    count: 10
    }
];

const totalValueStore = store.reduce((acc, item) =>
    acc + (item.price * item.count), 0);

console.log(totalValueStore);   // 14000