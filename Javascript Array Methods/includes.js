const names =  ['Milton', 'Ignatius', 'Huey', 'Kinosi', 'Abbas', 'Bartchang' ]

console.log(names.includes('Kinosi'));  // true

console.log(names.includes('Kios'));  // false


// Example : Check whether favourite fruit is remaining or not

const fruits = ['apple', 'mango', 'grapes']

const favourite = fruits.includes('oranges');

if(favourite) {
    console.log('Yuppy!!!');
} else {
    console.log('Sad, lets buy oranges.');
}

//  Sad, lets buy oranges.

