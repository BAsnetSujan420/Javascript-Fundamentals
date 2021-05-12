/**
 * Spread operator can be used in function calls, array literals and object literals
 */

// passing parameter in function
function sum(x, y, z){
    return x + y + z;
}

const numbers  = [1, 2, 3, 4, 5];
console.log(sum(...numbers));      // 6

// combining multiple array in new array
const arr1 = ['cat', 'dog'];
const arr2 = ['tiger', 'lion']
const arr3 = [...arr1, 'alien', 'martian', ...arr2];

console.log(arr3);  // [ 'cat', 'dog', 'alien', 'martian', 'tiger', 'lion' ]

// getting each elements of array
const name = 'Elizabeth'
const nameLetters = [...name];

console.log(nameLetters);      // [ 'E', 'l', 'i','z', 'a', 'b',    'e', 't', 'h' ]


//copying array - shallow copy
const original = ['cat', 'dog', 'mouse', 'monkey'];
const copy = [...original];

original.push('squirrel');

console.log(original);     // [ 'cat', 'dog', 'mouse', 'monkey', 'squirrel' ]
console.log(copy);        //  [ 'cat', 'dog', 'mouse', 'monkey' ]



// copying objects

const developer = {name: "Sujan", lang:"Javascript"}

const updateProfile = {...developer};

updateProfile["level"] = 1;

console.log(developer);      // { name: 'Sujan', lang: 'Javascript' }
console.log(updateProfile);  // { name: 'Sujan', lang: 'Javascript', level: 1 }


// Rest operator
function sum (...numbers){
    return numbers.reduce((total, value) => total + value)}

console.log(sum(1, 2, 3));  // 6

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));  // 55
