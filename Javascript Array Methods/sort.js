const friends = ['Milton', 'Ignatius', 'Huey', 'Kinosi', 'Abbas', 'Bartchang' ]

friends.sort();
console.log(friends); // [ 'Abbas', 'Bartchang', 'Huey', 'Ignatius', 'Kinosi', 'Milton' ]


const numbers = [74, 18, 10, 85, 9, 100]

//sort converts every elements to string
numbers.sort();
console.log(numbers);  // [ 10, 100, 18, 74, 85, 9 ]

function compareFunction(a, b) {
    return a - b;
}

numbers.sort(compareFunction);
console.log(numbers);            // [ 9, 10, 18, 74, 85, 100 ]


// Example : sorting products from expensive to cheap

const products = [
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

products.sort((item1, item2) => item2.price - item1.price);

console.log(products);

// [  { name: 'desktop', price: 1500, count: 2 },
//   { name: 'laptop', price: 1000, count: 5 },
//   { name: 'phone', price: 600, count: 10 }  ]
