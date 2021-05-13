const names =  ['Florin', 'Kevin', 'Gary', 'Travis']

// indexOf searches element from beginning and returns first found position
const index = names.indexOf('Travis');
console.log(index);  // 3

// adding new name in 4th position of array
names[index] = 'Kyle';
console.log(names);  //   [ 'Florin', 'Kevin', 'Gary', 'Kyle' ]


// checking if element is in array or not
const idx = names.indexOf('Travis');

if(idx > -1) {
    console.log("Yay, he is still active!!!");
} else {
    console.log("He is long gone !!!");
}


names[4] = 'Florin';
names[5] = 'Jesse';

console.log(names);  //  [ 'Florin', 'Kevin', 'Gary', 'Kyle', 'Florin', 'Jesse' ]

// indexOf searches element from end and returns first found position
console.log(names.lastIndexOf('Florin'));  // 4


