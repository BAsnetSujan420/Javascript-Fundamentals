const numbers = [1, 2, 3, 4, 5]

// map method is accessor, it does not mutate array
const numbersMultiply = numbers.map(multiply);

function multiply(value, index){
    return value * index;
}

console.log(numbersMultiply);  // [ 0, 2, 6, 12, 20 ]
console.log(numbers);          // [ 1, 2, 3, 4, 5 ]


// Example : find total products value

const products = [
    {
        name: 'laptop',
        price: 100,
        count: 5
    }, {
        name: 'desktop',
        price: 1500,
        count: 2
    }, {
        name: 'phone',
        price: 600,
        count: 10
    }
];

const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count })
);

console.log(totalProductsValue);

//  [{ name: 'laptop', totalValue: 500 },
//   { name: 'desktop', totalValue: 3000 },
//   { name: 'phone', totalValue: 6000 }]

