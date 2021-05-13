const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const even = numbers.filter(isEven);

function isEven(value){
    return value % 2 == 0;
}

// const even = numbers.filter(value => !(value % 2));

console.log(even);


// Example : filtering people with age

const people = [
    {
        name: 'Tomek',
        age: 50
    },
    {
        name: 'Abbas',
        age: 45
    },
    {
        name: 'Ignatius',
        age: 28
    },
    {
        name: 'Kios',
        age: 27
    }
]

const adults = people.filter(person => person.age >= 40);

console.log(adults);   // [ { name: 'Tomek', age: 50 }, { name: 'Abbas', age: 45 } ]


// Example : creating set og numbers

const nums = [1, 2, 2, 3, 4, 3, 4, 5, 6, 5]

const numberSet = nums.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(numberSet);  // [ 1, 2, 3, 4, 5, 6 ]
